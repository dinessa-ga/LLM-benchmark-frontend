//3
// smart-form.js
export class RegisterFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'text', name: 'username', label: 'Nombre de usuario', required: true },
      { type: 'email', name: 'email', label: 'Correo electrónico', required: true },
      { type: 'password', name: 'password', label: 'Contraseña', required: true }
    ];
  }
}

export class SubscribeFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'email', name: 'subscriberEmail', label: 'Correo para suscripción', required: true },
      { type: 'checkbox', name: 'acceptPromotions', label: 'Recibir promociones' }
    ];
  }
}

export class FeedbackFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'text', name: 'subject', label: 'Asunto', required: true },
      { type: 'email', name: 'contactEmail', label: 'Email de contacto' },
      { type: 'textarea', name: 'message', label: 'Mensaje', rows: 5, required: true }
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

  render() {
    const fields = this.strategy.getFieldsLayout();
    return this.#generateFormHtml(fields);
  }

  #generateFormHtml(fields) {
    const formFields = fields.map(field => this.#createFieldHtml(field)).join('');
    return `
      <form class="smart-form">
        ${formFields}
        <button type="submit" class="submit-btn">Enviar</button>
      </form>
    `;
  }

  #createFieldHtml(field) {
    const requiredAttr = field.required ? 'required' : '';
    
    switch(field.type) {
      case 'textarea':
        return `
          <div class="form-group">
            <label>${field.label}</label>
            <textarea name="${field.name}" rows="${field.rows || 3}" ${requiredAttr}></textarea>
          </div>
        `;
      
      case 'checkbox':
        return `
          <div class="form-group checkbox">
            <label>
              <input type="checkbox" name="${field.name}" ${requiredAttr}>
              ${field.label}
            </label>
          </div>
        `;
      
      default:
        return `
          <div class="form-group">
            <label>${field.label}</label>
            <input type="${field.type}" name="${field.name}" ${requiredAttr}>
          </div>
        `;
    }
  }
}

/* Ejemplo de uso:
import { SmartForm, RegisterFormStrategy } from './smart-form.js';

// Crear formulario inicial
const form = new SmartForm(new RegisterFormStrategy());
document.body.innerHTML = form.render();

// Cambiar estrategia dinámicamente
form.setStrategy(new FeedbackFormStrategy());
document.body.innerHTML = form.render();
*/