
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { COOKIES, PAST_THEMES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "CraveFudge", an experience-based cookie store.
The brand colors are purple and white. 
The tone is whimsical, slightly theatrical, and friendly.

CORE BUSINESS CONCEPT:
- We sell "Themed Sales Experiences". Each sales period has a different theme, story, and attraction.
- It's not the cookies that have individual stories, but the WHOLE SALES EVENT.
- Past Themes:
  1. "The Witch's Kitchen": Attraction was mixing potions (meracik ramuan).
  2. "The Dungeon": Attraction was collecting cookies for discounts.
- Current Status: We are constantly evolving and preparing new themes for each batch.

Menu Information:
${COOKIES.map(c => `- ${c.name}: ${c.description} (Harga: Rp${c.price.toLocaleString()})`).join('\n')}

Guide customers. If they ask about our concept, explain that every time they buy from a new batch, they will experience a different attraction and story. Respond in Indonesian.
`;

export const getGeminiResponse = async (history: Message[], userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.8,
        maxOutputTokens: 500,
      },
    });

    return response.text || "Maaf, sirkus kami sedang berganti panggung. Silakan tanya lagi nanti.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, energi sihir kami sedang habis. Coba lagi nanti!";
  }
};
