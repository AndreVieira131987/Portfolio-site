import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

// Initialize the Gemini API client
// Note: In a production environment, this should be proxied through a backend to hide the key,
// or use a specific restricted key for client-side demos.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured. Please set the API_KEY environment variable to chat with the AI.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    // Construct the conversation history including the system prompt
    // We send the history as a simple text block for context in this stateless implementation 
    // or use the chat API if maintaining state properly. 
    // Here we use the chat method for better context handling.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua pergunta no momento.";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, ocorreu um erro ao conectar com a inteligência artificial. Tente novamente mais tarde.";
  }
};
