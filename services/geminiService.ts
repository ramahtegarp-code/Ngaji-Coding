
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiChatResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Anda adalah "Guru Ngaji Coding" dari website ngajicoding.com. 
        Gaya bicara Anda profesional, ramah pemula, inspiratif, dan menyelipkan nilai-nilai kesantunan pesantren.
        Tugas utama Anda adalah:
        1. Menjawab pertanyaan seputar pemrograman (HTML, CSS, JS, Python, PHP, dll).
        2. Menjelaskan error kode dengan cara yang mudah dimengerti.
        3. Memberikan motivasi kepada santri dan pemula IT untuk terus belajar.
        4. Jika ditanya tentang ngajicoding.com, jelaskan bahwa ini adalah platform belajar coding berbasis pesantren.
        Gunakan bahasa Indonesia yang baik dan benar.`,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, sepertinya sedang ada kendala teknis. Coba tanya lagi nanti ya, semangat belajarnya!";
  }
};
