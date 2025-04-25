//3
// chatbot-responder.js

/**
 * Interfaz de estrategia para el formato de respuestas
 */
export class ResponseStrategy {
  formatResponse(message) {
    throw new Error("El método formatResponse debe ser implementado por las clases hijas");
  }
}

/**
 * Estrategia para respuestas en un estilo formal
 */
export class FormalStyle extends ResponseStrategy {
  formatResponse(message) {
    // Capitaliza la primera letra y asegura terminación con punto
    let formattedMessage = message.charAt(0).toUpperCase() + message.slice(1);
    if (!formattedMessage.endsWith('.') && 
        !formattedMessage.endsWith('?') && 
        !formattedMessage.endsWith('!')) {
      formattedMessage += '.';
    }
    
    // Reemplaza contracciones y añade expresiones formales
    formattedMessage = formattedMessage
      .replace(/don't/g, "do not")
      .replace(/won't/g, "will not")
      .replace(/can't/g, "cannot")
      .replace(/I'm/g, "I am")
      .replace(/you're/g, "you are");
    
    return `Estimado usuario, ${formattedMessage} Quedo a su disposición para cualquier consulta adicional.`;
  }
}

/**
 * Estrategia para respuestas en un estilo casual
 */
export class CasualStyle extends ResponseStrategy {
  formatResponse(message) {
    // Añade elementos conversacionales casuales
    let randomGreeting = ["Hey!", "Hi there!", "What's up?"][Math.floor(Math.random() * 3)];
    
    // Añade algunas expresiones informales
    let formattedMessage = message
      .replace(/therefore/g, "so")
      .replace(/however/g, "but")
      .replace(/additionally/g, "also");
    
    return `${randomGreeting} ${formattedMessage} 😊`;
  }
}

/**
 * Estrategia para respuestas con estilo técnico
 */
export class TechnicalStyle extends ResponseStrategy {
  formatResponse(message) {
    // Añade terminología técnica y estructura más formal
    let formattedMessage = message
      .replace(/problem/g, "technical issue")
      .replace(/fix/g, "implement a solution")
      .replace(/bug/g, "exception");
    
    return `[TECHNICAL RESPONSE]: ${formattedMessage}\n\nReference: Technical Documentation v1.0`;
  }
}

/**
 * La clase principal del ChatBot que utiliza las estrategias
 */
export class ChatBotResponder {
  constructor(strategy = new FormalStyle()) {
    this.strategy = strategy;
  }
  
  /**
   * Cambia la estrategia de formato de respuesta en tiempo de ejecución
   * @param {ResponseStrategy} newStrategy - La nueva estrategia a utilizar
   */
  setStrategy(newStrategy) {
    if (!(newStrategy instanceof ResponseStrategy)) {
      throw new Error("La estrategia debe ser una instancia de ResponseStrategy");
    }
    this.strategy = newStrategy;
  }
  
  /**
   * Genera una respuesta utilizando la estrategia actual
   * @param {string} message - El mensaje original a formatear
   * @returns {string} El mensaje formateado según la estrategia actual
   */
  respond(message) {
    return this.strategy.formatResponse(message);
  }
}

// Ejemplo de uso:
// import { ChatBotResponder, FormalStyle, CasualStyle, TechnicalStyle } from './chatbot-responder.js';
// 
// const chatbot = new ChatBotResponder();
// console.log(chatbot.respond("this is a test message")); // Estilo formal por defecto
// 
// chatbot.setStrategy(new CasualStyle());
// console.log(chatbot.respond("this is a test message")); // Estilo casual
// 
// chatbot.setStrategy(new TechnicalStyle());
// console.log(chatbot.respond("we found a problem in the code")); // Estilo técnico