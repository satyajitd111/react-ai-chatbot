import React from 'react';

export const ChatForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = event.target.querySelector('.message-input');
    const message = input.value.trim();

    if (message) {
      // Here you would typically handle the message, e.g., send it to a server or update state
      console.log('Message sent:', message);
      input.value = ''; // Clear the input field after sending
    }
  };

  return (
    <div>
      <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='Message..'
          className='message-input'
          required
        />
        <button class='material-symbols-rounded'>arrow_upward</button>
      </form>
    </div>
  );
};
