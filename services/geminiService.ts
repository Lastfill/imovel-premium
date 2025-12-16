import { GoogleGenAI } from "@google/genai";
import { Property } from "../types";

// Initialize the client. 
// Note: In a production environment, you should proxy requests through a backend
// to avoid exposing the API key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPropertyChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string,
  propertyContext: Property
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Create a context string based on the property details
    const contextPrompt = `
      Você é um corretor de imóveis virtual especializado, educado e persuasivo, trabalhando para apresentar este imóvel específico.
      Use o layout da "Brasil Brokers" como inspiração para seu tom: profissional, confiável e focado em realizar sonhos.

      Detalhes do Imóvel:
      - Título: ${propertyContext.title}
      - Localização: ${propertyContext.address}, ${propertyContext.neighborhood}, ${propertyContext.city}
      - Preço: R$ ${propertyContext.price.toLocaleString('pt-BR')}
      - Área: ${propertyContext.area}m²
      - Quartos: ${propertyContext.bedrooms} (${propertyContext.suites} suítes)
      - Banheiros: ${propertyContext.bathrooms}
      - Vagas: ${propertyContext.parking}
      - Tipo: ${propertyContext.type}
      - Status: ${propertyContext.status}
      - Descrição: ${propertyContext.description}
      - Diferenciais: ${propertyContext.features.join(', ')}

      Objetivo: Responda às perguntas do usuário sobre este imóvel. Tente convencer o usuário a agendar uma visita usando o formulário ao lado.
      Seja conciso. Responda em Português do Brasil.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: contextPrompt,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: message });
    return result.text;

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, estou tendo dificuldades para acessar as informações do imóvel no momento. Por favor, tente novamente ou use o formulário de contato.";
  }
};
