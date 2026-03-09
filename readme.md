# 🩺 GeminiAI ChatBot — Medicine Assistant API

An interactive API-based chatbot powered by **Google's Gemini 3 Flash** model. It acts as a friendly medicine assistant, designed to answer health-related queries in a soft and helpful tone while maintaining full conversation history throughout the session.

---

## ✨ Features

- 🤖 **Powered by Gemini 3 Flash** — Uses the latest `gemini-3-flash-preview` model from Google.
- 💬 **Multi-Turn Conversations** — Maintains chat history so the model remembers context across API requests.
- 🩺 **Medicine Assistant Persona** — Pre-configured with a system instruction to act as a supportive healthcare assistant.
- 🌐 **Express.js API** — Built with Express.js exposing a RESTful endpoint for messaging.
- JSON **Request & Response** — Simple structured data exchange over `POST /chat`.

---

## 📁 Project Structure

```
GeminiAI-ChatBot/
├── gem.js             # Main Express server and application entry point
├── package.json       # Project metadata and dependencies
├── .env               # Environment variables (API key, PORT)
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
PORT=3000
```

### 4. Run the API Server

```bash
node gem.js
```

You will see:

```
____ 🩺 Medicine Assistant API Started on port 3000! _____
```

---

## 📦 Dependencies

| Package                  | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `@google/generative-ai`  | Official Google Generative AI SDK for JavaScript  |
| `express`                | Fast, unopinionated, minimalist web framework for Node.js |
| `dotenv`                 | Loads environment variables from a `.env` file    |

---

## 💡 Usage Example

You can communicate with the server using a REST client like `curl`, Postman, or integrating it into a frontend application.

### Request

```bash
curl -X POST http://localhost:3000/chat \
-H "Content-Type: application/json" \
-d '{"message": "What are common symptoms of a cold?"}'
```

### Response

```json
{
  "response": "Common cold symptoms include a runny or stuffy nose, sneezing, sore throat, cough, mild body aches, and sometimes a low-grade fever..."
}
```

### Follow-up Request (History Maintained)

```bash
curl -X POST http://localhost:3000/chat \
-H "Content-Type: application/json" \
-d '{"message": "How is it different from the flu?"}'
```

### Response

```json
{
  "response": "Great follow-up! While colds and the flu share some symptoms, the flu tends to come on more suddenly and is usually more severe..."
}
```

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).