import { useRef } from 'react';

export const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef(null);
  console.log('satya123', inputRef);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    console.log(`User message: ${userMessage}`);
    console.log('satya', inputRef);
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage }
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: 'model', text: 'Thinking...' }
        ]),
      600
    );
    inputRef.current.value = '';
  };

  return (
    <div>
      <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Message..'
          className='message-input'
          required
        />
        <button className='material-symbols-rounded'>arrow_upward</button>
      </form>
    </div>
  );
};
