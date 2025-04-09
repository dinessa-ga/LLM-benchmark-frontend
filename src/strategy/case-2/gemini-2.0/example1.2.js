// 2
// chatbot.js
export class FormalStyle {
  formatResponse(message) {
    return `Estimado usuario, en respuesta a su consulta: ${message}.  Agradezco su paciencia y comprensión.`;
  }
}

export class CasualStyle {
  formatResponse(message) {
    return `¡Hey! Sobre tu mensaje: ${message}. ¡Espero que te sirva! 😉`;
  }
}

export class TechnicalStyle {
  formatResponse(message) {
    return `Input: ${message}. Output: [Processing complete].  Status: OK.`;
  }
}

export class ChatBotResponder {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  respond(message) {
    return this.strategy.formatResponse(message);
  }
}