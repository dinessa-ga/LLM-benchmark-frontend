//1

// Clase base Abstracta
export class ArticleCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Método render() debe ser implementado por la subclase');
  }
}

// Artículo de Noticias
export class NewsArticle extends ArticleCard {
  render() {
    return `
      <article class="news">
        <h2>${this.data.title}</h2>
        <p>${this.data.content}</p>
        <footer>Fuente: ${this.data.source}</footer>
      </article>
    `;
  }
}

// Artículo de Opinión
export class OpinionArticle extends ArticleCard {
  render() {
    return `
      <article class="opinion">
        <h2>${this.data.title}</h2>
        <blockquote>"${this.data.opinion}"</blockquote>
        <author>${this.data.author}</author>
      </article>
    `;
  }
}

// Artículo Reportaje
export class ReportArticle extends ArticleCard {
  render() {
    return `
      <article class="report">
        <h1>${this.data.headline}</h1>
        <section>${this.data.investigation}</section>
        <div class="stats">${this.data.stats}</div>
      </article>
    `;
  }
}

// Factory Method
export class ArticleFactory {
  static createArticle(type, data) {
    const normalizedType = type.toLowerCase();
    
    switch(normalizedType) {
      case 'news':
        return new NewsArticle(data);
      case 'opinion':
        return new OpinionArticle(data);
      case 'report':
        return new ReportArticle(data);
      default:
        throw new Error(`Tipo de artículo no válido: ${type}`);
    }
  }
}