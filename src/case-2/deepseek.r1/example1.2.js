// 2

// Clase base para todos los artículos
class articleCard {
  constructor(data) {
    if (new.target === articleCard) {
      throw new Error("No se puede instanciar la clase abstracta articleCard");
    }
    this.data = data;
    this.type = 'Artículo genérico';
  }

  render() {
    throw new Error("Método abstracto render() debe ser implementado");
  }
}

// Tipos concretos de artículos
class newsArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'Artículo de Noticias';
  }

  render() {
    return `
      <div class="news-card">
        <h2>${this.data.headline}</h2>
        <p class="location">${this.data.location}</p>
        <p>${this.data.content}</p>
      </div>
    `;
  }
}

class opinionArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'Artículo de Opinión';
  }

  render() {
    return `
      <div class="opinion-card">
        <h3>Opinión de ${this.data.author}</h3>
        <blockquote>${this.data.opinion}</blockquote>
        <p>Valoración: ${this.data.rating}/5</p>
      </div>
    `;
  }
}

class reportArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'Artículo de Reportaje';
  }

  render() {
    return `
      <div class="report-card">
        <h2>${this.data.title}</h2>
        <div class="meta">
          <span>Páginas: ${this.data.pages}</span>
          <span>Autor: ${this.data.author}</span>
        </div>
        <article>${this.data.reportContent}</article>
      </div>
    `;
  }
}

// Factory Method
const articleFactory = {
  createArticle: (type, data) => {
    const articleTypes = {
      news: newsArticle,
      opinion: opinionArticle,
      report: reportArticle
    };

    const ArticleClass = articleTypes[type.toLowerCase()];
    
    if (!ArticleClass) {
      throw new Error(`Tipo de artículo no soportado: ${type}`);
    }
    
    return new ArticleClass(data);
  }
};

// Ejemplo de uso
try {
  const noticia = articleFactory.createArticle('news', {
    headline: 'Nuevas medidas económicas',
    location: 'Barcelona',
    content: 'El gobierno anunció hoy nuevas medidas...'
  });

  const opinion = articleFactory.createArticle('opinion', {
    author: 'María Gómez',
    opinion: 'Las nuevas políticas ambientales son insuficientes...',
    rating: 3
  });

  const reportaje = articleFactory.createArticle('report', {
    title: 'Cambio climático en 2024',
    pages: 12,
    author: 'Equipo de investigación',
    reportContent: 'Un estudio reciente revela...'
  });

  console.log(noticia.render());
  console.log(opinion.render());
  console.log(reportaje.render());

} catch (error) {
  console.error('Error:', error.message);
}