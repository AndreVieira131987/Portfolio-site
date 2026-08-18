import { GoogleGenAI } from "@google/genai";
import { CONTENT } from '../i18n/content';
import { Language } from '../types';

// Initialize the Gemini API client
// Note: In a production environment, this should be proxied through a backend to hide the key,
// or use a specific restricted key for client-side demos.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model', text: string }[],
  language: Language
): Promise<string> => {
  const content = CONTENT[language];

  if (!apiKey) {
    return content.chat.demoMode;
  }

  try {
    const model = "gemini-2.5-flash";

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: content.systemPrompt,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || content.chat.genericError;

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return content.chat.genericError;
  }
};
