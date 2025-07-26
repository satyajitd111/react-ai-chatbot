import { useRef } from "react";
import styles from "../Chatbot.module.css";

export const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef(null);
  // inputRef holds reference to the input field

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Update chat history with user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Delay 600 ms before showing 'Thinking...' message and generating bot response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // Call the function to generate bot response
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    }, 600);

    inputRef.current.value = "";
  };

  return (
    <div>
      <form action="#" className={styles.chatForm} onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Message.."
          className={styles.messageInput}
          required
        />
        <button className="material-symbols-rounded">arrow_upward</button>
      </form>
    </div>
  );
};
