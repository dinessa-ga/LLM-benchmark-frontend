// 2
// task-card.js
// Implementación del patrón de estrategia para renderizado de tarjetas de tareas

// Clase principal que utiliza las estrategias
export class TaskCard {
  constructor(data, strategy) {
    this.data = data;
    this.strategy = strategy;
  }

  render() {
    return this.strategy.render(this.data);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
    return this;
  }
}

// Interfaz de estrategia (implementada implícitamente)
// Cada estrategia debe implementar el método render(data)

// Estrategia para tareas pendientes
export class PendingStrategy {
  render(data) {
    return {
      id: data.id,
      title: data.title,
      status: 'Pendiente',
      style: {
        backgroundColor: '#FFF3CD',
        borderLeft: '4px solid #FFC107',
        color: '#856404'
      },
      actions: ['Iniciar', 'Editar', 'Eliminar'],
      icon: '⏱️'
    };
  }
}

// Estrategia para tareas en progreso
export class InProgressStrategy {
  render(data) {
    return {
      id: data.id,
      title: data.title,
      status: 'En Progreso',
      style: {
        backgroundColor: '#D1ECF1',
        borderLeft: '4px solid #17A2B8',
        color: '#0C5460'
      },
      actions: ['Pausar', 'Completar', 'Editar'],
      icon: '🔄'
    };
  }
}

// Estrategia para tareas completadas
export class CompletedStrategy {
  render(data) {
    return {
      id: data.id,
      title: data.title,
      status: 'Completada',
      style: {
        backgroundColor: '#D4EDDA',
        borderLeft: '4px solid #28A745',
        color: '#155724',
        textDecoration: 'line-through'
      },
      actions: ['Reabrir', 'Archivar'],
      icon: '✅'
    };
  }
}

// Exportación de todas las clases
export default {
  TaskCard,
  PendingStrategy,
  InProgressStrategy,
  CompletedStrategy
};