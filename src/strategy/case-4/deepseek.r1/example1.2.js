// 2
// learningModule.js
export class VisualStrategy {
  renderContent(data) {
    return `
      <div style="border: 2px solid #4A90E2; padding: 20px; margin: 10px; border-radius: 8px;">
        <h3 style="color: #4A90E2; margin-top: 0;">Contenido Visual</h3>
        <img src="${data.imageUrl}" 
             alt="Contenido visual" 
             style="max-width: 100%; height: auto; border-radius: 4px;">
      </div>
    `;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `
      <div style="border: 2px solid #50E3C2; padding: 20px; margin: 10px; border-radius: 8px;">
        <h3 style="color: #50E3C2; margin-top: 0;">Contenido Auditivo</h3>
        <audio controls src="${data.audioUrl}" 
               style="width: 100%; margin-top: 10px;">
          Tu navegador no soporta audio HTML5
        </audio>
      </div>
    `;
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `
      <div style="border: 2px solid #F5A623; padding: 20px; margin: 10px; border-radius: 8px;">
        <h3 style="color: #F5A623; margin-top: 0;">Contenido de Lectura</h3>
        <p style="line-height: 1.6; font-size: 16px;">${data.text}</p>
      </div>
    `;
  }
}

export class LearningModule {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  render(data) {
    const content = this.strategy.renderContent(data);
    
    // Aplicación en tiempo real en el DOM
    if (typeof document !== 'undefined') {
      const container = document.createElement('div');
      container.innerHTML = content;
      document.body.appendChild(container);
    }
    
    return content;
  }
}