
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async generateBusinessPitch(niche: string): Promise<string> {
    try {
      // Initialize the AI client directly before use with the environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como um consultor de negócios especialista em SaaS, crie um pitch curto (3 frases) explicando por que comprar o código fonte da DigitalZap (plataforma de CRM e Automação de WhatsApp) é a melhor escolha para quem atua no nicho de: ${niche}. Fale sobre lucro, escalabilidade e ser dono da tecnologia.`,
        config: {
          temperature: 0.7,
        }
      });
      // Accessing the .text property directly as per guidelines
      return response.text || "Erro ao gerar pitch.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Não foi possível gerar o pitch agora, mas a DigitalZap é perfeita para você!";
    }
  }
}

export const geminiService = new GeminiService();
