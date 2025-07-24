// import { useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { ChatbotIcon } from './components/ChatbotIcon';
import { ChatForm } from './components/ChatForm';
import { ChatMessage } from './components/ChatMessage';
import { generateBotResponse } from './util/helper';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    //Auto scroll to the bottom of chat body when new messages are added
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [chatHistory]);
  // console.log('Chat History:', chatHistory);
  return (
    <div className={`container ${showChatBot ? 'show-chatbot' : ''}`}>
      <button
        onClick={() => setShowChatBot((show) => !show)}
        className=''
        id='chatbot-toggle'
      >
        <span className='material-symbols-rounded'>mode_comment</span>
        <span className='material-symbols-rounded'>close</span>
      </button>

      <div className='chatbot-popup'>
        {/* ChatBot Header */}

        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatBot((show) => !show)}
            className='material-symbols-rounded'
          >
            keyboard_arrow_down
          </button>
        </div>
        {/* ChatBot Body */}
        <div ref={chatBodyRef} className='chat-body'>
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Hey there! <br /> How can I assist you today?
            </p>
          </div>
          {/* Render chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} idx={index} />
          ))}

          {/* ChatBot Footer */}
          <div className='chat-footer'>
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              // generateBotResponse={generateBotResponse}
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
