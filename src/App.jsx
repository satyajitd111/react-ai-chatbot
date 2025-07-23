// import { useState } from 'react';
import React, { useState } from 'react';
import { ChatbotIcon } from './components/ChatbotIcon';
import { ChatForm } from './components/ChatForm';
import { ChatMessage } from './components/ChatMessage';
const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  console.log('Chat History:', chatHistory);
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/* ChatBot Header */}
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button className='material-symbols-rounded'>
            keyboard_arrow_down
          </button>
        </div>
        {/* ChatBot Body */}
        <div className='chat-body'>
          {/* Render chat history ynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} idx={index} />
          ))}

          {/* ChatBot Footer */}
          <div className='chat-footer'>
            <ChatForm setChatHistory={setChatHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
