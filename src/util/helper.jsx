import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const model = new GoogleGenerativeAI(API_KEY).getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const generateBotResponse = async (chatHistory, setChatHistory) => {
  try {
    // 1. Remove any "Thinking..." placeholder messages
    const cleanedHistory = chatHistory.filter(
      (msg) => msg.text !== "Thinking..."
    );

    // 2. Copy the history so we can safely pop the last user message
    const historyCopy = [...cleanedHistory];
    const lastMessage = historyCopy[historyCopy.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      throw new Error("Last message is not a user message.");
    }

    // 3. Pop the last user message (to avoid repeating it in history)
    const lastUserMessage = historyCopy.pop();

    // 4. Format the remaining history for Gemini
    const formattedHistory = historyCopy.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    // 5. Create chat and send the last message
    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(lastUserMessage.text);

    // 6. Clean and format the model response
    const responseText = (await result.response)
      .text()
      .replace(/\*+(.*?)\*+/g, "$1") // remove markdown asterisks
      .trim();

    // 7. Update chat history (only if not already present)
    const alreadyExists = cleanedHistory.some(
      (msg) => msg.role === "model" && msg.text === responseText
    );

    if (!alreadyExists) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: responseText },
      ]);
    }

    console.log("Gemini response:", responseText);
  } catch (err) {
    console.error("Gemini error:", err);
  }
};
