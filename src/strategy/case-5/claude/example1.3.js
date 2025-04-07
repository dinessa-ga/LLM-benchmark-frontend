//3
// SmartForm.js

// Interfaz de estrategia
export class FormStrategy {
  getFieldsLayout() {
    throw new Error('El método getFieldsLayout debe ser implementado por las clases hijas');
  }
}

// Estrategia para formulario de registro
export class RegisterFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { name: 'fullName', type: 'text', label: 'Nombre completo', required: true },
      { name: 'email', type: 'email', label: 'Correo electrónico', required: true },
      { name: 'password', type: 'password', label: 'Contraseña', required: true },
      { name: 'confirmPassword', type: 'password', label: 'Confirmar contraseña', required: true },
      { name: 'terms', type: 'checkbox', label: 'Acepto los términos y condiciones', required: true }
    ];
  }
}

// Estrategia para formulario de suscripción
export class SubscribeFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { name: 'email', type: 'email', label: 'Correo electrónico', required: true },
      { name: 'frequency', type: 'select', label: 'Frecuencia', 
        options: ['Diario', 'Semanal', 'Mensual'], required: true },
      { name: 'topics', type: 'checkbox-group', label: 'Temas de interés', 
        options: ['Tecnología', 'Negocios', 'Ciencia', 'Arte'], required: false }
    ];
  }
}

// Estrategia para formulario de feedback
export class FeedbackFormStrategy extends FormStrategy {
  getFieldsLayout() {
    return [
      { name: 'rating', type: 'rating', label: 'Calificación', max: 5, required: true },
      { name: 'comments', type: 'textarea', label: 'Comentarios', required: false },
      { name: 'email', type: 'email', label: 'Correo electrónico (opcional)', required: false },
      { name: 'contactMe', type: 'checkbox', label: 'Quiero que me contacten', required: false }
    ];
  }
}

// Clase principal que utiliza las estrategias
export class SmartForm {
  constructor(strategy) {
    this.strategy = strategy;
  }

  // Método para cambiar la estrategia
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  // Obtiene el layout de campos según la estrategia actual
  getFormFields() {
    return this.strategy.getFieldsLayout();
  }

  // Renderiza el formulario (implementación básica para demostración)
  render() {
    const fields = this.getFormFields();
    console.log('Renderizando formulario con los siguientes campos:');
    console.log(fields);
    return fields;
  }

  // Método para manejar el envío del formulario
  submit(formData) {
    console.log('Enviando datos del formulario:', formData);
    // Aquí iría la lógica específica según el tipo de formulario
    return true;
  }
}