// 2
// ...existing code...
class FormalStyle {
  formatResponse(message) {
    return `Estimado interlocutor, ${message}`;
  }
}

class CasualStyle {
  formatResponse(message) {
    return `Hey! ${message}`;
  }
}

class TechnicalStyle {
  formatResponse(message) {
    return `System log: ${message}`;
  }
}

class ChatBotResponder {
  constructor(strategy = new CasualStyle()) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  getResponse(message) {
    return this.strategy.formatResponse(message);
  }
}

export { ChatBotResponder, FormalStyle, CasualStyle, TechnicalStyle };
// ...existing code...