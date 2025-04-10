// 2
// smartForm.js
export class RegisterFormStrategy {
  getFieldsLayout() {
    return [
      { type: "text", name: "username", label: "Nombre de usuario" },
      { type: "email", name: "email", label: "Correo electrónico" },
      { type: "password", name: "password", label: "Contraseña" },
      { type: "password", name: "confirmPassword", label: "Confirmar contraseña" }
    ];
  }
}

export class SubscribeFormStrategy {
  getFieldsLayout() {
    return [
      { type: "email", name: "newsletterEmail", label: "Email para suscripción" },
      { type: "checkbox", name: "terms", label: "Acepto recibir notificaciones" }
    ];
  }
}

export class FeedbackFormStrategy {
  getFieldsLayout() {
    return [
      { type: "text", name: "subject", label: "Asunto" },
      { type: "email", name: "contactEmail", label: "Email de contacto" },
      { type: "textarea", name: "message", label: "Tu mensaje", rows: 4 }
    ];
  }
}

export class SmartForm {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  renderForm() {
    const fields = this.strategy.getFieldsLayout();
    let formHTML = '<form class="smart-form">';
    
    fields.forEach(field => {
      formHTML += this.#createFieldMarkup(field);
    });

    formHTML += '<button type="submit">Enviar</button>';
    formHTML += "</form>";
    return formHTML;
  }

  #createFieldMarkup(field) {
    const commonAttributes = `name="${field.name}" placeholder="${field.label}"`;
    let fieldHTML = '<div class="form-field">';

    switch(field.type) {
      case "textarea":
        fieldHTML += `<label>${field.label}</label>
          <textarea ${commonAttributes} rows="${field.rows || 3}"></textarea>`;
        break;
        
      case "checkbox":
        fieldHTML += `
          <label>
            <input type="checkbox" ${commonAttributes}>
            ${field.label}
          </label>`;
        break;

      default:
        fieldHTML += `<label>${field.label}</label>
          <input type="${field.type}" ${commonAttributes}>`;
    }

    return fieldHTML + "</div>";
  }
}

/* Ejemplo de uso:
import { SmartForm, RegisterFormStrategy, SubscribeFormStrategy, FeedbackFormStrategy } from './smartForm.js';

// Crear formulario de registro
const registration = new SmartForm(new RegisterFormStrategy());
document.getElementById("register-form").innerHTML = registration.renderForm();

// Cambiar a formulario de feedback
registration.setStrategy(new FeedbackFormStrategy());
document.getElementById("feedback-form").innerHTML = registration.renderForm();
*/