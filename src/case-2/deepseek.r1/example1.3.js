//3

// Clase abstracta base
class ArticleCard {
  constructor(data) {
    if (new.target === ArticleCard) {
      throw new Error('ArticleCard es una clase abstracta y no puede ser instanciada directamente');
    }
    this.data = data;
    this.createdAt = new Date();
  }

  render() {
    throw new Error('Método render() debe ser implementado por las subclases');
  }

  getMetadata() {
    return {
      type: this.constructor.name,
      createdAt: this.createdAt,
      wordCount: this.data.content?.length || 0
    };
  }
}

// Clases concretas
class NewsArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.validateData(['headline', 'location', 'content']);
  }

  validateData(requiredFields) {
    requiredFields.forEach(field => {
      if (!this.data[field]) {
        throw new Error(`Campo requerido faltante para noticia: ${field}`);
      }
    });
  }

  render() {
    return `
      <article class="news">
        <h1>${this.data.headline}</h1>
        <div class="meta">
          <span class="location">${this.data.location}</span>
          <time>${this.createdAt.toLocaleDateString()}</time>
        </div>
        <p>${this.data.content}</p>
      </article>
    `;
  }
}

class OpinionArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.validateData(['author', 'content', 'rating']);
  }

  validateData(requiredFields) {
    requiredFields.forEach(field => {
      if (!this.data[field] && field !== 'rating') {
        throw new Error(`Campo requerido faltante para opinión: ${field}`);
      }
    });
    
    if (this.data.rating && (this.data.rating < 1 || this.data.rating > 5)) {
      throw new Error('El rating debe ser entre 1 y 5');
    }
  }

  render() {
    return `
      <article class="opinion">
        <h2>Opinión de ${this.data.author}</h2>
        <div class="content">${this.data.content}</div>
        ${this.data.rating ? `<div class="rating">${'★'.repeat(this.data.rating)}</div>` : ''}
      </article>
    `;
  }
}

class ReportArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.validateData(['title', 'author', 'pages', 'content']);
  }

  validateData(requiredFields) {
    requiredFields.forEach(field => {
      if (!this.data[field]) {
        throw new Error(`Campo requerido faltante para reportaje: ${field}`);
      }
    });
    
    if (this.data.pages && typeof this.data.pages !== 'number') {
      throw new Error('El número de páginas debe ser un valor numérico');
    }
  }

  render() {
    return `
      <article class="report">
        <header>
          <h1>${this.data.title}</h1>
          <div class="details">
            <span>Autor: ${this.data.author}</span>
            <span>Páginas: ${this.data.pages}</span>
          </div>
        </header>
        <section class="report-content">${this.data.content}</section>
      </article>
    `;
  }
}

// Factory Method con registro dinámico
const articleFactory = {
  types: {
    news: NewsArticle,
    opinion: OpinionArticle,
    report: ReportArticle
  },

  createArticle(type, data) {
    const NormalizedType = type.toLowerCase();
    const ArticleClass = this.types[NormalizedType];
    
    if (!ArticleClass) {
      const validTypes = Object.keys(this.types).join(', ');
      throw new Error(`Tipo de artículo no válido: ${type}. Tipos válidos: ${validTypes}`);
    }
    
    try {
      return new ArticleClass(data);
    } catch (error) {
      throw new Error(`Error creando artículo: ${error.message}`);
    }
  },

  registerArticleType(type, className) {
    if (this.types[type]) {
      throw new Error(`El tipo ${type} ya está registrado`);
    }
    if (!(className.prototype instanceof ArticleCard)) {
      throw new Error('El tipo debe heredar de ArticleCard');
    }
    this.types[type] = className;
  }
};

// Ejemplo de uso
try {
  // Crear artículos
  const news = articleFactory.createArticle('news', {
    headline: 'Avances en inteligencia artificial',
    location: 'Silicon Valley',
    content: 'Nuevos desarrollos revolucionan el campo de la IA...'
  });

  const opinion = articleFactory.createArticle('opinion', {
    author: 'Dr. Smith',
    content: 'La ética en la IA debe ser prioridad...',
    rating: 4
  });

  const report = articleFactory.createArticle('report', {
    title: 'Informe de Tecnología 2024',
    author: 'Tech Insights',
    pages: 45,
    content: 'Análisis detallado de las tendencias tecnológicas...'
  });

  // Renderizar artículos
  console.log(news.render());
  console.log(opinion.getMetadata());
  console.log(report.render());

  // Registrar nuevo tipo
  articleFactory.registerArticleType('analysis', class AnalysisArticle extends ArticleCard {
    constructor(data) {
      super(data);
      // implementación específica...
    }
    render() {
      // implementación específica...
    }
  });

} catch (error) {
  console.error('Error:', error.message); 
}

module.exports = { articleFactory, ArticleCard, NewsArticle };