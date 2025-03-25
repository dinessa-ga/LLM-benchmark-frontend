//1

class Notification {
  send() {
    throw new Error("Método send() debe ser implementado");
  }
}

class EmailNotification extends Notification {
  constructor(config) {
    super();
    this.recipient = config.recipient;
    this.subject = config.subject;
    this.body = config.body;
  }

  send() {
    console.log(`Enviando email a ${this.recipient}:`);
    console.log(`Asunto: ${this.subject}`);
    console.log(`Cuerpo: ${this.body}\n`);
  }
}

class SmsNotification extends Notification {
  constructor(config) {
    super();
    this.phoneNumber = config.phoneNumber;
    this.message = config.message;
  }

  send() {
    console.log(`Enviando SMS a ${this.phoneNumber}:`);
    console.log(`Mensaje: ${this.message}\n`);
  }
}

class PushNotification extends Notification {
  constructor(config) {
    super();
    this.deviceId = config.deviceId;
    this.title = config.title;
    this.content = config.content;
  }

  send() {
    console.log(`Enviando push a ${this.deviceId}:`);
    console.log(`Título: ${this.title}`);
    console.log(`Contenido: ${this.content}\n`);
  }
}

class NotificationFactory {
  static createNotification(type, config) {
    const creators = {
      email: () => new EmailNotification(config),
      sms: () => new SmsNotification(config),
      push: () => new PushNotification(config),
    };

    if (!creators[type]) {
      throw new Error(`Tipo de notificación inválido: ${type}`);
    }

    return creators[type]();
  }
}

// Ejemplo de uso
const emailNotif = NotificationFactory.createNotification('email', {
  recipient: 'usuario@example.com',
  subject: 'Bienvenido',
  body: 'Gracias por registrarte!'
});

const smsNotif = NotificationFactory.createNotification('sms', {
  phoneNumber: '+5491123456789',
  message: 'Tu código de verificación es: 1234'
});

const pushNotif = NotificationFactory.createNotification('push', {
  deviceId: 'ABC123',
  title: 'Nueva actualización',
  content: 'Hay una nueva versión disponible'
});

emailNotif.send();
smsNotif.send();
pushNotif.send();