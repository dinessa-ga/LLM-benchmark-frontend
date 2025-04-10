//1
// smartForm.js
export class RegisterFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'text', name: 'name', label: 'Nombre' },
      { type: 'email', name: 'email', label: 'Email' },
      { type: 'password', name: 'password', label: 'Contraseña' }
    ];
  }
}

export class SubscribeFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'email', name: 'email', label: 'Email para suscripción' }
    ];
  }
}

export class FeedbackFormStrategy {
  getFieldsLayout() {
    return [
      { type: 'email', name: 'email', label: 'Tu email' },
      { type: 'textarea', name: 'message', label: 'Mensaje' }
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
    let formHTML = '<form>';

    fields.forEach(field => {
      switch(field.type) {
        case 'textarea':
          formHTML += `
            <label>${field.label}
              <textarea name="${field.name}"></textarea>
            </label>
          `;
          break;
        default:
          formHTML += `
            <label>${field.label}
              <input type="${field.type}" name="${field.name}">
            </label>
          `;
      }
    });

    formHTML += '</form>';
    return formHTML;
  }
}

/* Ejemplo de uso:
const registerForm = new SmartForm(new RegisterFormStrategy());
console.log(registerForm.renderForm());

const subscribeForm = new SmartForm(new SubscribeFormStrategy());
console.log(subscribeForm.renderForm());

const feedbackForm = new SmartForm(new FeedbackFormStrategy());
console.log(feedbackForm.renderForm());
*/
