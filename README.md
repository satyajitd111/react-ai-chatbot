# 🤖 React ChatBot – Portfolio Assistant

A smart and interactive AI-powered chatbot built with React and powered by Gemini SDK, designed to guide users through the portfolio of Satyajit Das. This bot answers questions, provides project summaries, and offers a personalized experience for visitors.

---

## ✨ Features

- 🔍 **Smart Q&A**: Answers user queries about your portfolio using natural language.
- 🧠 **Powered by Gemini**: Uses Google’s Gemini SDK for generating contextual and relevant responses.
- 💬 **Persistent Chat UI**: Smooth and responsive chat interface with message history.
- 🖼️ **Project-aware Responses**: Understands and summarizes your listed projects dynamically.
- 🧩 **Modular Components**: Clean component-based architecture using React best practices.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite  
- **AI Integration**: Gemini 2.5 Flash via Google Generative Language API  
- **Styling**: CSS, Inter font  
- **State Management**: useState, useEffect  

---

## 📁 Folder Structure

```

react-chat-bot/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ChatbotIcon.jsx
│   │   ├── ChatForm.jsx
│   │   └── ChatMessage.jsx
│   ├── data/
│   │   └── personalInfo.js
│   ├── util/
│   │   └── helper.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                 # API key goes here
├── .gitignore
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/satyajitd111/react-ai-chatbot.git
cd react-chat-bot
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Create a `.env` file at the root:

```env
VITE_API_KEY=your-gemini-api-key
```

### 4. Run the Project

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🧪 Sample Prompts

* “Tell me more about the AI Chatbot project.”
* “Which tech stack does Satyajit use?”
* “What are some of his recent projects?”

---

## 🤝 Contributing

Contributions are welcome! Open a PR with improvements or ideas.


