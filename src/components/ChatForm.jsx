import { useRef } from 'react';

export const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse
}) => {
  const inputRef = useRef(null);
  // console.log('satya123', inputRef);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // console.log(`User message: ${userMessage}`);
    // console.log('satya', inputRef);
    // Update chat history with user message
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage }
    ]);
    //  Delay 600 ms before showing 'Thinking...' message and generating bot response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: 'model', text: 'Thinking...' }
      ]);
      //  call the function to generate bot response
      generateBotResponse([
        ...chatHistory,
        {
          role: 'user',
          text: `using the details provided above, please address this query: ${userMessage}`
        }
      ]);
    }, 600);

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
