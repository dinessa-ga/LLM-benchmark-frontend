//3

// articleFactory.js

export class ArticleCard {
  constructor(data) {
    if (new.target === ArticleCard) {
      throw new Error("ArticleCard es una clase abstracta y no puede ser instanciada directamente");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado por las clases hijas");
  }
}

export class NewsArticle extends ArticleCard {
  render() {
    return `
      <article class="news-card">
        <header class="news-header">
          <h2>${this.data.title}</h2>
          <div class="meta">
            <span>Por ${this.data.author}</span>
            <time>${new Date(this.data.publishDate).toLocaleDateString()}</time>
          </div>
        </header>
        <p class="excerpt">${this.data.excerpt}</p>
        ${this.data.featuredImage ? `<img src="${this.data.featuredImage}" alt="${this.data.title}">` : ''}
      </article>
    `;
  }
}

export class OpinionArticle extends ArticleCard {
  render() {
    return `
      <div class="opinion-card">
        <div class="author-info">
          <img src="${this.data.authorImage}" alt="${this.data.author}" class="avatar">
          <h3>${this.data.author}</h3>
          <p>${this.data.authorBio}</p>
        </div>
        <div class="opinion-content">
          <h4>${this.data.title}</h4>
          <blockquote>${this.data.content}</blockquote>
          <div class="rating">
            Valoración: ${'★'.repeat(this.data.rating)}${'☆'.repeat(5 - this.data.rating)}
          </div>
        </div>
      </div>
    `;
  }
}

export class ReportArticle extends ArticleCard {
  render() {
    return `
      <section class="report-article">
        <header class="report-header">
          <h1>${this.data.headline}</h1>
          <div class="report-meta">
            <span class="category ${this.data.category.toLowerCase()}">${this.data.category}</span>
            <div class="stats">
              <span>${this.data.pages} páginas</span>
              <span>${this.data.readingTime} min de lectura</span>
            </div>
          </div>
        </header>
        <div class="report-body">
          ${this.data.sections.map(section => `
            <div class="report-section">
              <h3>${section.title}</h3>
              <p>${section.content}</p>
              ${section.chart ? `<div class="chart">${section.chart}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}

export class ArticleFactory {
  static TYPE = {
    NEWS: 'news',
    OPINION: 'opinion',
    REPORT: 'report'
  };

  static createArticle(type, data) {
    const typeMap = {
      [ArticleFactory.TYPE.NEWS]: NewsArticle,
      [ArticleFactory.TYPE.OPINION]: OpinionArticle,
      [ArticleFactory.TYPE.REPORT]: ReportArticle
    };

    const normalizedType = type.toLowerCase();
    const ArticleClass = typeMap[normalizedType];

    if (!ArticleClass) {
      const validTypes = Object.values(ArticleFactory.TYPE).join(', ');
      throw new Error(`Tipo de artículo inválido: "${type}". Tipos válidos: ${validTypes}`);
    }

    return new ArticleClass(data);
  }
}

// Uso:
// const articleData = { title: "Mi artículo", author: "Juan Pérez", ... };
// const article = ArticleFactory.createArticle(ArticleFactory.TYPE.NEWS, articleData);
// document.getElementById('content').innerHTML = article.render();