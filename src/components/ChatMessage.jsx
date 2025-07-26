import React from "react";
import { ChatbotIcon } from "./ChatbotIcon";
import styles from "../Chatbot.module.css";

export const ChatMessage = ({ chat }) => {
  // Render nothing if the message is marked to be hidden
  return (
    !chat.hideInChat && (
      <>
        <div
          className={`${styles.message} ${
            chat.role === "model" ? styles.botMessage : styles.userMessage
          }`}
        >
          {/* Render the bot icon only for model-generated messages */}
          {chat.role === "model" && <ChatbotIcon />}

          {/* Render the actual chat text */}
          <p className={styles.messageText}>{chat.text}</p>
        </div>
      </>
    )
  );
};
