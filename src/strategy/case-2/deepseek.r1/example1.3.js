//3
// Definición de las estrategias de respuesta
class FormalStyle {
  formatResponse(message) {
      return `Respuesta formal: ${message}. Atentamente, el servicio de atención.`;
  }
}

class CasualStyle {
  formatResponse(message) {
      return `¡Hola! 👋 ${message}. ¿Necesitas ayuda con algo más?`;
  }
}

class TechnicalStyle {
  formatResponse(message) {
      return `[Reporte técnico] ${message}. Acción requerida: Consultar protocolos del sistema.`;
  }
}

// Clase principal del chatbot con estrategias intercambiables
class ChatBotResponder {
  constructor() {
      this.estrategia = new FormalStyle(); // Estrategia por defecto
  }

  cambiarEstrategia(nuevaEstrategia) {
      if (!(nuevaEstrategia instanceof FormalStyle ||
            nuevaEstrategia instanceof CasualStyle ||
            nuevaEstrategia instanceof TechnicalStyle)) {
          throw new Error('Estrategia no compatible');
      }
      this.estrategia = nuevaEstrategia;
  }

  generarRespuesta(mensajeUsuario) {
      return this.estrategia.formatResponse(mensajeUsuario);
  }
}

// Exportación de módulos
export default ChatBotResponder;
export { FormalStyle, CasualStyle, TechnicalStyle };