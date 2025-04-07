//1
// notification-system.js

// Interface para las estrategias (no es estrictamente necesaria en JS pero ayuda a entender la estructura)
class NotificationStrategy {
  renderNotification(data) {
    throw new Error('El método renderNotification debe ser implementado por las clases hijas');
  }
}

// Estrategia para notificaciones de éxito
export class SuccessStrategy extends NotificationStrategy {
  renderNotification(data) {
    return {
      icon: '✓',
      title: data.title || 'Éxito',
      message: data.message,
      style: {
        backgroundColor: '#4CAF50',
        color: '#FFFFFF',
        borderLeft: '4px solid #2E7D32'
      }
    };
  }
}

// Estrategia para notificaciones de error
export class ErrorStrategy extends NotificationStrategy {
  renderNotification(data) {
    return {
      icon: '✕',
      title: data.title || 'Error',
      message: data.message,
      style: {
        backgroundColor: '#F44336',
        color: '#FFFFFF',
        borderLeft: '4px solid #B71C1C'
      }
    };
  }
}

// Estrategia para notificaciones de advertencia
export class WarningStrategy extends NotificationStrategy {
  renderNotification(data) {
    return {
      icon: '⚠',
      title: data.title || 'Advertencia',
      message: data.message,
      style: {
        backgroundColor: '#FF9800',
        color: '#000000',
        borderLeft: '4px solid #E65100'
      }
    };
  }
}

// Clase principal Notification que utiliza las estrategias
export class Notification {
  constructor(strategy) {
    this.strategy = strategy;
    this.container = null;
    this.element = null;
  }

  // Método para cambiar la estrategia en tiempo de ejecución
  setStrategy(strategy) {
    this.strategy = strategy;
    return this;
  }

  // Método para mostrar la notificación
  show(data) {
    const renderedData = this.strategy.renderNotification(data);
    
    // Crear el elemento de notificación si no existe
    if (!this.element) {
      this.element = document.createElement('div');
      document.body.appendChild(this.element);
    }
    
    // Aplicar los estilos y contenido
    Object.assign(this.element.style, renderedData.style, {
      padding: '15px',
      margin: '10px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      position: 'fixed',
      top: '20px',
      right: '20px',
      maxWidth: '300px',
      zIndex: '9999',
      transition: 'all 0.3s ease'
    });
    
    // Establecer el contenido HTML
    this.element.innerHTML = `
      <div style="font-size: 24px; margin-right: 15px;">${renderedData.icon}</div>
      <div>
        <div style="font-weight: bold; margin-bottom: 5px;">${renderedData.title}</div>
        <div>${renderedData.message}</div>
      </div>
    `;
    
    // Auto-ocultar después de un tiempo
    setTimeout(() => {
      this.hide();
    }, data.duration || 3000);
    
    return this;
  }
  
  // Método para ocultar la notificación
  hide() {
    if (this.element) {
      this.element.style.opacity = '0';
      setTimeout(() => {
        if (this.element && this.element.parentNode) {
          this.element.parentNode.removeChild(this.element);
          this.element = null;
        }
      }, 300);
    }
    return this;
  }
  
  // Método para aplicar estilos personalizados
  applyStyle(customStyle) {
    if (this.element) {
      Object.assign(this.element.style, customStyle);
    }
    return this;
  }
}

// Exportar por defecto la clase Notification
export default Notification;
