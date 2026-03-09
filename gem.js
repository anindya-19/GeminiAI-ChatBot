import 'dotenv/config';
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    systemInstruction: "You are a friendly medicine assistant. Talk to clients in a soft, helpful tone. Make them feel comfortable."
});

const chat = model.startChat({
    history: [],
    generationConfig: {
        maxOutputTokens: 1000,
    },
});

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const result = await chat.sendMessage(message);
        const response = result.response.text();
        
        res.json({ response });
    } catch (err) {
        console.error("Error from AI:", err.message);
        res.status(500).json({ error: "An error occurred while communicating with the AI" });
    }
});

app.listen(port, () => {
    console.log(`____ 🩺 Medicine Assistant API Started on port ${port}! _____`);
});