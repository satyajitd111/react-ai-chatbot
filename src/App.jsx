import React, { useEffect, useRef, useState } from "react";
import { ChatbotIcon } from "./components/ChatbotIcon";
import { ChatForm } from "./components/ChatForm";
import { ChatMessage } from "./components/ChatMessage";
import { generateBotResponse } from "./util/helper";
import { personalInfo } from "./data/personalInfo";
import styles from "./Chatbot.module.css";

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "user", text: personalInfo },
  ]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Auto scroll to the bottom of chat body when new messages are added
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div
      className={`${styles.container} ${showChatBot ? styles.showChatbot : ""}`}
    >
      {/* Toggle Chatbot Visibility */}
      <button
        onClick={() => setShowChatBot((show) => !show)}
        id={styles.chatbotToggle}
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className={styles.chatbotPopup}>
        {/* ChatBot Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <ChatbotIcon />
            <h2 className={styles.logoText}>Assistant</h2>
          </div>
          <button
            onClick={() => setShowChatBot((show) => !show)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* ChatBot Body */}
        <div ref={chatBodyRef} className={styles.chatBody}>
          {/* Initial Welcome Message */}
          <div className={`${styles.message} ${styles.botMessage}`}>
            <ChatbotIcon />
            <p className={styles.messageText}>
              👋 Hi there! Welcome to Satyajit Das’s portfolio.
            </p>
          </div>

          {/* Render chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} idx={index} />
          ))}

          {/* ChatBot Footer */}
          <div className={styles.chatFooter}>
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={(history) =>
                generateBotResponse(history, setChatHistory)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
