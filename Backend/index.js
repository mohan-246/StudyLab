import express from 'express';
import { config } from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';

config(); // Load environment variables from .env

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const errorMessage="An error occured!"
app.use(cors());
app.use(express.json());

app.post('/chat/assistant', async (req, res) => {
  const { userMessage } = req.body; 
 
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const reply = response.choices[0].message.content;
   
    res.json({ reply });
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    res.json({errorMessage})
    
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
