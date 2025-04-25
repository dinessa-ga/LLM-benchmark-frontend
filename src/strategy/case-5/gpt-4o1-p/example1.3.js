//3
export class RegisterFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Usuario', type: 'text' },
      { label: 'Correo', type: 'email' },
      { label: 'Contraseña', type: 'password' }
    ];
  }
}

export class SubscribeFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Correo', type: 'email' },
      { label: 'Tipo de suscripción', type: 'text' }
    ];
  }
}

export class FeedbackFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Nombre', type: 'text' },
      { label: 'Comentario', type: 'textarea' }
    ];
  }
}

export class SmartForm {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  getFieldsLayout() {
    return this.strategy.getFieldsLayout();
  }
}