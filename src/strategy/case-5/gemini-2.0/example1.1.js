//1
// formStrategies.js
// Definición de las interfaces y clases relacionadas con las estrategias de formularios inteligentes

/**
 * @interface FormStrategy
 * Interfaz para las estrategias de formularios.  Define el método `getFieldsLayout`.
 */
class FormStrategy {
  /**
   * Debe devolver un array de objetos. Cada objeto describe un campo del formulario,
   * incluyendo su tipo, etiqueta, y otras propiedades relevantes.
   * @abstract
   * @returns {Array<Object>}
   */
  getFieldsLayout() {
    throw new Error("El método getFieldsLayout() debe ser implementado.");
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
      { type: "email", name: "email", label: "Correo Electrónico" },
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
      { type: "email", name: "email", label: "Correo Electrónico" },
      { type: "checkbox", name: "terms", label: "Acepto los términos y condiciones" },
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
      { type: "email", name: "email", label: "Correo Electrónico" },
      { type: "textarea", name: "feedback", label: "Comentarios" },
      { type: "select", name: "rating", label: "Calificación", options: [1, 2, 3, 4, 5] },
    ];
  }
}


/**
 * @class SmartForm
 * Clase que utiliza estrategias para construir formularios dinámicamente.
 */
class SmartForm {
  /**
   * @param {FormStrategy} strategy - La estrategia a utilizar para el formulario.
   */
  constructor(strategy) {
    this.strategy = strategy;
  }

  /**
   * Cambia la estrategia utilizada por el formulario.
   * @param {FormStrategy} strategy - La nueva estrategia a utilizar.
   */
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  /**
   * Devuelve el layout de campos definido por la estrategia actual.
   * @returns {Array<Object>}
   */
  getFieldsLayout() {
    return this.strategy.getFieldsLayout();
  }

  /**
   * Renderiza el formulario basado en el layout de campos.  Este es un ejemplo simplificado.
   * En una aplicación real, esto generaría elementos HTML.
   * @returns {string} - Una representación en string del formulario.
   */
  renderForm() {
    const fields = this.getFieldsLayout();
    let formHTML = "<div>";
    fields.forEach(field => {
      formHTML += `<label for="${field.name}">${field.label}:</label><br>`;

      switch (field.type) {
        case "text":
        case "email":
        case "password":
          formHTML += `<input type="${field.type}" id="${field.name}" name="${field.name}"><br><br>`;
          break;
        case "textarea":
          formHTML += `<textarea id="${field.name}" name="${field.name}"></textarea><br><br>`;
          break;
        case "checkbox":
          formHTML += `<input type="checkbox" id="${field.name}" name="${field.name}"> <br><br>`;
          break;
        case "select":
          formHTML += `<select id="${field.name}" name="${field.name}">`;
          field.options.forEach(option => {
            formHTML += `<option value="${option}">${option}</option>`;
          });
          formHTML += `</select><br><br>`;
          break;
        default:
          formHTML += `<span>Tipo de campo desconocido: ${field.type}</span><br><br>`;
      }
    });
    formHTML += "<button type='submit'>Enviar</button></div>";
    return formHTML;
  }
}


export {
  FormStrategy,
  RegisterFormStrategy,
  SubscribeFormStrategy,
  FeedbackFormStrategy,
  SmartForm
};
