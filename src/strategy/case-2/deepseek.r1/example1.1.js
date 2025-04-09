//1
// Definición de las estrategias
class FormalStyle {
  formatResponse(message) {
      return `Formal response: ${message}. Kind regards, Sir/Madam.`;
  }
}

class CasualStyle {
  formatResponse(message) {
      return `Hey! ${message} 😊 Let me know if you need anything else!`;
  }
}

class TechnicalStyle {
  formatResponse(message) {
      return `Technical analysis: ${message}. Recommended action: Review specifications.`;
  }
}

// Clase principal que utiliza estrategias dinámicas
class ChatBotResponder {
  constructor(responseStrategy = new FormalStyle()) {
      this.responseStrategy = responseStrategy;
  }

  setResponseStrategy(responseStrategy) {
      this.responseStrategy = responseStrategy;
  }

  respond(message) {
      return this.responseStrategy.formatResponse(message);
  }
}

// Exportar todas las clases
export default ChatBotResponder;
export { FormalStyle, CasualStyle, TechnicalStyle };

