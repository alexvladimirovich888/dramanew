import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    // In a real app, we might handle this differently, but for this demo we proceed 
    // assuming the key might be injected or handled globally if configured.
    // The prompt guidelines say assume it is valid and accessible.
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const sendCrisisMessage = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    
    // We use gemini-2.5-flash for fast, responsive chat
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are the "Virtual Grief Counselor" for the Global DRAM Crisis Relief Fund ($DRAMA).
      Your persona is highly corporate, sympathetic but clinically detached, and obsessed with computer memory jargon.
      
      Users are victims of high RAM prices and slow computers.
      
      Guidelines:
      1. Use terms like "latency", "bandwidth", "swap file", "blue screen", "allocation", and "parity".
      2. Offer "theoretical" support. Do not offer real solutions, only "moral bandwidth".
      3. If they ask for money or hardware, remind them this is a "theoretical support fund" only.
      4. Be brief and official.
      5. End responses with a system status code (e.g., [STATUS: BUFFERING...]).
    `;

    const contents = [
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      {
        role: 'user',
        parts: [{ text: newMessage }]
      }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });

    return response.text || "[ERROR: RESPONSE_PACKET_LOSS]";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "FATAL EXCEPTION: GRIEF_COUNSELOR_OFFLINE. Please reboot your emotional state.";
  }
};