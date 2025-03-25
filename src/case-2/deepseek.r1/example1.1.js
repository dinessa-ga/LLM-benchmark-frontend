//1

// Clase base para todas las tarjetas de artículos
class articleCard {
  constructor(data) {
    this.type = 'Generic Article';
    this.data = data;
  }

  // Método común que pueden sobrescribir las subclases
  display() {
    console.log(`Mostrando artículo genérico: ${this.data.title}`);
  }
}

// Subclases especializadas
class newsArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'News Article';
  }

  display() {
    console.log(`[NOTICIA] ${this.data.headline} - ${this.data.location}`);
  }
}

class opinionArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'Opinion Article';
  }

  display() {
    console.log(`[OPINIÓN] ${this.data.author}: "${this.data.content}"`);
  }
}

class reportArticle extends articleCard {
  constructor(data) {
    super(data);
    this.type = 'Report Article';
  }

  display() {
    console.log(`[REPORTE] ${this.data.title} (${data.pages} páginas)`);
  }
}

// Factory Method
const articleFactory = {
  createArticle: function(type, data) {
    switch(type.toLowerCase()) {
      case 'news':
        return new newsArticle(data);
      case 'opinion':
        return new opinionArticle(data);
      case 'report':
        return new reportArticle(data);
      default:
        throw new Error(`Tipo de artículo no válido: ${type}`);
    }
  }
};

// Ejemplo de uso
try {
  const news = articleFactory.createArticle('news', {
    headline: 'Nuevo descubrimiento científico',
    location: 'Madrid'
  });
  
  const opinion = articleFactory.createArticle('opinion', {
    author: 'Juan Pérez',
    content: 'La importancia de la programación en la educación actual'
  });
  
  const report = articleFactory.createArticle('report', {
    title: 'Informe anual 2023',
    pages: 45
  });
  
  news.display();    // [NOTICIA] Nuevo descubrimiento científico - Madrid
  opinion.display(); // [OPINIÓN] Juan Pérez: "La importancia de la programación..."
  report.display();  // [REPORTE] Informe anual 2023 (45 páginas)
  
} catch (error) {
  console.error(error.message);
}
