//1
export class RegisterFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Username', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Password', type: 'password' }
    ];
  }
}

export class SubscribeFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Email', type: 'email' },
      { label: 'Newsletter Frequency', type: 'select' }
    ];
  }
}

export class FeedbackFormStrategy {
  getFieldsLayout() {
    return [
      { label: 'Name', type: 'text' },
      { label: 'Feedback', type: 'textarea' }
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