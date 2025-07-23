import React from 'react';
import { ChatbotIcon } from './ChatbotIcon';

export const ChatMessage = ({ chat, idx }) => {
  return (
    <>
      {idx === 0 && (
        <div className='message bot-message'>
          <ChatbotIcon />
          <p className='message-text'>
            Hey there! <br /> How can I assist you today?
          </p>
        </div>
      )}
      <div
        className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}
      >
        {chat.role === 'model' && <ChatbotIcon />}
        <p className='message-text'>{chat.text}</p>
      </div>
    </>
  );
};
