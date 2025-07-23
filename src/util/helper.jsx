export const generateBotResponse = async (history, setChatHistory) => {
  history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
  // console.log(history);
  // Format chat history for API request
  const requestOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contents: history })
  };
  try {
    // Make API call to generate bot response
    const response = await fetch(import.meta.env.VITE_API_URL, requestOption);
    const data = await response.json();
    if (response.ok) {
      const apiResponseText = data['candidates'][0]['content']['parts'][0][
        'text'
      ]
        .replace(/\*+(.*?)\*+/g, '$1')
        .trim();
      setChatHistory((historyItems) => [
        ...historyItems.filter((item) => item.text !== 'Thinking...'),
        {
          role: 'model',
          text: apiResponseText
        }
      ]);
    } else throw new Error(data.error.message || 'Failed to fetch response');

    console.log('Response:', data);
  } catch (error) {
    console.error('Error generating bot response:', error);
  }
};
