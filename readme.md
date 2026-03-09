# 🩺 GeminiAI ChatBot — Medicine Assistant

An interactive terminal-based chatbot powered by **Google's Gemini 3 Flash** model. It acts as a friendly medicine assistant, designed to answer health-related queries in a soft and helpful tone while maintaining full conversation history throughout the session.

---

## ✨ Features

- 🤖 **Powered by Gemini 3 Flash** — Uses the latest `gemini-3-flash-preview` model from Google.
- 💬 **Multi-Turn Conversations** — Maintains chat history so the model remembers context across messages.
- 🩺 **Medicine Assistant Persona** — Pre-configured with a system instruction to act as a supportive healthcare assistant.
- ⌨️ **Interactive Terminal Interface** — Ask questions directly in your terminal using a simple REPL loop.
- 🚪 **Graceful Exit** — Type `exit` at any time to end the session.

---

## 📁 Project Structure

```
GeminiAI-ChatBot/
├── gem.js             # Main application entry point
├── package.json       # Project metadata and dependencies
├── .env               # Environment variables (API key)
├── .gitignore         # Git ignore rules
└── readme.md          # Project documentation
```

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A **Google Gemini API key** — Get one from [Google AI Studio](https://aistudio.google.com/apikey)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/GeminiAI-ChatBot.git
cd GeminiAI-ChatBot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root and add your Gemini API key:

```env
GEMINI_AI_KEY=your_api_key_here
```

### 4. Run the ChatBot

```bash
node gem.js
```

You will see:

```
____ 🩺 Medicine Assistant Started! (Type 'exit' to quit) _____
Ask Gemini 3 :
```

Start typing your questions and the assistant will respond! The conversation history is maintained throughout the session, so feel free to ask follow-up questions.

---

## 📦 Dependencies

| Package                  | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `@google/generative-ai`  | Official Google Generative AI SDK for JavaScript  |
| `@google/genai`          | Google GenAI client library                       |
| `dotenv`                 | Loads environment variables from a `.env` file    |

---

## 💡 Usage Example

```
____ 🩺 Medicine Assistant Started! (Type 'exit' to quit) _____
Ask Gemini 3 :
What are common symptoms of a cold?

Gemini's response:
Common cold symptoms include a runny or stuffy nose, sneezing,
sore throat, cough, mild body aches, and sometimes a low-grade fever...

Ask Gemini 3 :
How is it different from the flu?

Gemini's response:
Great follow-up! While colds and the flu share some symptoms,
the flu tends to come on more suddenly and is usually more severe...

Ask Gemini 3 :
exit
goodbye!!
```

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).