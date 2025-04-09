//1
// strategy.js
export class FormalStyle {
  formatResponse(message) {
    return `Estimado usuario, en respuesta a su consulta: ${message}. Agradezco su paciencia.`;
  }
}

export class CasualStyle {
  formatResponse(message) {
    return `¡Hola! Sobre tu mensaje: ${message} 😉`;
  }
}

export class TechnicalStyle {
  formatResponse(message) {
    return `Acknowledged: ${message}. Processing... Result: [Analysis complete]`;
  }
}

export class ChatBotResponder {
  constructor(style) {
    this.style = style;
  }

  setStrategy(style) {
    this.style = style;
  }

  respond(message) {
    return this.style.formatResponse(message);
  }
}
