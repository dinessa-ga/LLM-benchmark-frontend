// 2
// Definición de las estrategias de respuesta
class FormalStyle {
  formatResponse(message) {
      return `Estimado usuario, le informamos que: ${message}. Atentamente, el equipo de soporte.`;
  }
}

class CasualStyle {
  formatResponse(message) {
      return `¡Hola! 😄 ${message}. ¿Necesitas algo más?`;
  }
}

class TechnicalStyle {
  formatResponse(message) {
      return `[Análisis técnico] ${message}. Recomendación: Verificar en la documentación oficial.`;
  }
}

// Clase principal del chatbot con cambio dinámico de estrategia
class ChatBotResponder {
  constructor() {
      this.strategy = new FormalStyle(); // Estrategia por defecto
  }

  setTone(newStrategy) {
      if (!(newStrategy instanceof FormalStyle || 
            newStrategy instanceof CasualStyle || 
            newStrategy instanceof TechnicalStyle)) {
          throw new Error('Estrategia no válida');
      }
      this.strategy = newStrategy;
  }

  generateResponse(userMessage) {
      return this.strategy.formatResponse(userMessage);
  }
}

// Exportación de módulos
export default ChatBotResponder;
export { FormalStyle, CasualStyle, TechnicalStyle };
