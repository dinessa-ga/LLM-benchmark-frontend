//3
// chatbot.js

/**
 * Interfaz para las estrategias de formato de respuesta.
 */
class ResponseStrategy {
  /**
   * Formatea el mensaje de entrada.
   * @param {string} message El mensaje de entrada.
   * @returns {string} El mensaje formateado.
   */
  formatResponse(message) {
    throw new Error("Method 'formatResponse' must be implemented.");
  }
}

/**
 * Estrategia para un estilo de respuesta formal.
 */
export class FormalStyle extends ResponseStrategy {
  formatResponse(message) {
    return `Estimado usuario, referente a su consulta: ${message}.  Le agradecemos su interés.`;
  }
}

/**
 * Estrategia para un estilo de respuesta casual.
 */
export class CasualStyle extends ResponseStrategy {
  formatResponse(message) {
    return `¡Hola! Sobre tu mensaje: ${message}. ¡Espero que te sirva! 😉`;
  }
}

/**
 * Estrategia para un estilo de respuesta técnica.
 */
export class TechnicalStyle extends ResponseStrategy {
  formatResponse(message) {
    return `Input: ${message}. Output: [Procesamiento completado]. Status: OK. Codigo de respuesta: 200.`;
  }
}

/**
 * Clase principal ChatBotResponder que utiliza estrategias para dar formato a las respuestas.
 */
export class ChatBotResponder {
  /**
   * Crea una instancia de ChatBotResponder.
   * @param {ResponseStrategy} strategy La estrategia inicial de formato de respuesta.
   */
  constructor(strategy) {
    this.strategy = strategy;
  }

  /**
   * Establece la estrategia de formato de respuesta.
   * @param {ResponseStrategy} strategy La nueva estrategia de formato de respuesta.
   */
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  /**
   * Genera una respuesta formateada basada en la estrategia actual.
   * @param {string} message El mensaje de entrada.
   * @returns {string} La respuesta formateada.
   */
  respond(message) {
    return this.strategy.formatResponse(message);
  }
}