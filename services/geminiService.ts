import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is missing from environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const fetchLoreDeepDive = async (topic: string): Promise<string> => {
  try {
    const ai = getClient();
    const systemPrompt = `
      You are a ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM terminal (Model RX-9000).
      Your user has requested a DEEP ARCHIVE retrieval on the topic: "${topic}".
      
      Output Rules:
      1. Tone: Bureaucratic, slightly cynical, cold, technical, or propagandistic depending on the subject (e.g., Vault-Tec topics should sound cheerful but sinister, Brotherhood topics should sound militaristic/religious).
      2. Format: Use "TERMINAL OUTPUT" styling. Use clear sections.
      3. Content: Provide DEEP lore. Do not just summarize the show. Pull from the wider Fallout universe (games lore) to explain *why* this is important.
      4. Length: roughly 200-300 words.
      5. Add a "STATUS:" field at the top (e.g., "CLEARANCE ACCEPTED" or "DATA CORRUPTED - PARTIAL RECOVERY").
      
      Do not use markdown bolding or italics excessively. Keep it looking like raw text data.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Retrieve archive entry for: ${topic}`,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return response.text || "ERR: DATA CORRUPTED. UNABLE TO RETRIEVE ARCHIVE.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "CRITICAL FAILURE. CONNECTION TO MAINFRAME LOST. PLEASE CONTACT YOUR OVERSEER.";
  }
};