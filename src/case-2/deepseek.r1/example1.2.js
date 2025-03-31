// 2

// articleFactories.js

export class ArticleCard {
  constructor(data) {
    if (new.target === ArticleCard) {
      throw new Error("ArticleCard es una clase abstracta y no puede ser instanciada directamente");
    }
    this.data = data;
  }

  render() {
    throw new Error("Método render() debe ser implementado por la subclase");
  }
}

export class NewsArticle extends ArticleCard {
  render() {
    return `
      <div class="news-article">
        <h3 class="news-title">${this.data.title}</h3>
        <p class="news-excerpt">${this.data.excerpt}</p>
        <div class="news-meta">
          <span class="author">${this.data.author}</span>
          <time>${this.data.publishDate}</time>
        </div>
      </div>
    `;
  }
}

export class OpinionArticle extends ArticleCard {
  render() {
    return `
      <div class="opinion-article">
        <h4 class="opinion-title">${this.data.title}</h4>
        <div class="opinion-content">${this.data.content}</div>
        <div class="opinion-author">
          <img src="${this.data.authorImage}" alt="${this.data.author}">
          <strong>${this.data.author}</strong>
        </div>
      </div>
    `;
  }
}

export class ReportArticle extends ArticleCard {
  render() {
    return `
      <div class="report-article">
        <h2 class="report-title">${this.data.title}</h2>
        <div class="report-stats">
          <span class="reading-time">${this.data.readingTime} min read</span>
          <span class="category">${this.data.category}</span>
        </div>
        <div class="report-body">${this.data.body}</div>
        ${this.data.infographic ? `<img src="${this.data.infographic}" class="report-infographic">` : ''}
      </div>
    `;
  }
}

export class ArticleFactory {
  static createArticle(type, data) {
    const articleTypes = {
      news: NewsArticle,
      opinion: OpinionArticle,
      report: ReportArticle
    };

    const ArticleClass = articleTypes[type.toLowerCase()];
    
    if (!ArticleClass) {
      throw new Error(`Tipo de artículo no soportado: ${type}`);
    }
    
    return new ArticleClass(data);
  }
}

// Ejemplo de uso:
// import { ArticleFactory } from './articleFactories.js';
//
// const news = ArticleFactory.createArticle('news', {
//   title: "Nuevo Estudio Climático",
//   excerpt: "Los últimos hallazgos revelan...",
//   author: "María Gómez",
//   publishDate: "2024-03-20"
// });
//
// console.log(news.render());