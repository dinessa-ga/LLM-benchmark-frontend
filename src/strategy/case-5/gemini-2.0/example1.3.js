//3
// formStrategies.js

/**
 * @interface FormStrategy
 * Interfaz para las estrategias de formularios.
 */
class FormStrategy {
  /**
   * Retorna un array de objetos. Cada objeto describe un campo del formulario.
   * @abstract
   * @returns {Array<Object>}
   */
  getFieldsLayout() {
    throw new Error("Method 'getFieldsLayout()' must be implemented.");
  }
}

/**
 * @class RegisterFormStrategy
 * Implementación de la estrategia para el formulario de registro.
 */
class RegisterFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { type: "text", name: "firstName", label: "Nombre" },
      { type: "text", name: "lastName", label: "Apellido" },
      { type: "email", name: "email", label: "Email" },
      { type: "password", name: "password", label: "Contraseña" },
      { type: "password", name: "confirmPassword", label: "Confirmar Contraseña" },
    ];
  }
}

/**
 * @class SubscribeFormStrategy
 * Implementación de la estrategia para el formulario de suscripción.
 */
class SubscribeFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { type: "email", name: "email", label: "Email" },
      { type: "checkbox", name: "acceptTerms", label: "Acepto los términos y condiciones" },
    ];
  }
}

/**
 * @class FeedbackFormStrategy
 * Implementación de la estrategia para el formulario de feedback.
 */
class FeedbackFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { type: "text", name: "name", label: "Nombre" },
      { type: "email", name: "email", label: "Email" },
      { type: "textarea", name: "feedback", label: "Comentarios" },
      { type: "number", name: "rating", label: "Calificación (1-5)", min: 1, max: 5 },
    ];
  }
}

/**
 * @class SmartForm
 * Clase que utiliza estrategias para construir formularios dinámicamente.
 */
class SmartForm {
  /**
   * @param {FormStrategy} strategy - La estrategia inicial a utilizar.
   */
  constructor(strategy) {
    this.strategy = strategy;
  }

  /**
   * Cambia la estrategia del formulario.
   * @param {FormStrategy} strategy - La nueva estrategia a utilizar.
   */
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  /**
   * Obtiene el layout de campos del formulario.
   * @returns {Array<Object>}
   */
  getFieldsLayout() {
    return this.strategy.getFieldsLayout();
  }

  /**
   * Genera HTML para el formulario basándose en la estrategia actual.
   *
   * @returns {string} HTML string representing the form.
   */
  render() {
    const fields = this.getFieldsLayout();
    let html = "<form>";

    fields.forEach(field => {
      html += `<label for="${field.name}">${field.label}:</label><br>`;

      switch (field.type) {
        case "text":
        case "email":
        case "password":
        case "number":
          html += `<input type="${field.type}" id="${field.name}" name="${field.name}" `;
          if (field.min) html += `min="${field.min}" `;
          if (field.max) html += `max="${field.max}" `;
          html += `><br><br>`;
          break;
        case "textarea":
          html += `<textarea id="${field.name}" name="${field.name}"></textarea><br><br>`;
          break;
        case "checkbox":
          html += `<input type="checkbox" id="${field.name}" name="${field.name}"><br><br>`;
          break;
        default:
          html += `<span>Tipo de campo no soportado: ${field.type}</span><br><br>`;
      }
    });

    html += '<button type="submit">Enviar</button>';
    html += "</form>";
    return html;
  }
}

export {
  FormStrategy,
  RegisterFormStrategy,
  SubscribeFormStrategy,
  FeedbackFormStrategy,
  SmartForm,
};