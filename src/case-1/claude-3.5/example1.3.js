//3

// article-factory.js

// Clase base ArticleCard
export class ArticleCard {
  constructor(data) {
    this.title = data.title || '';
    this.author = data.author || '';
    this.date = data.date || new Date().toISOString();
    this.content = data.content || '';
  }

  render() {
    throw new Error('El método render() debe ser implementado por las clases hijas');
  }
}

// Clase concreta para artículos de noticias
export class NewsArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.category = data.category || 'General';
    this.imageUrl = data.imageUrl || '';
    this.summary = data.summary || '';
  }

  render() {
    return `
      <article class="news-article">
        <h2>${this.title}</h2>
        ${this.imageUrl ? `<img src="${this.imageUrl}" alt="${this.title}">` : ''}
        <div class="metadata">
          <span class="category">${this.category}</span>
          <span class="author">Por: ${this.author}</span>
          <span class="date">${new Date(this.date).toLocaleDateString()}</span>
        </div>
        <p class="summary">${this.summary}</p>
        <div class="content">${this.content}</div>
      </article>
    `;
  }
}

// Clase concreta para artículos de opinión
export class OpinionArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.topic = data.topic || '';
    this.authorBio = data.authorBio || '';
  }

  render() {
    return `
      <article class="opinion-article">
        <h2>${this.title}</h2>
        <div class="metadata">
          <span class="topic">Tema: ${this.topic}</span>
          <span class="author">Por: ${this.author}</span>
          <span class="date">${new Date(this.date).toLocaleDateString()}</span>
        </div>
        <div class="author-bio">${this.authorBio}</div>
        <div class="content">${this.content}</div>
      </article>
    `;
  }
}

// Clase concreta para reportajes
export class ReportArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.location = data.location || '';
    this.sources = data.sources || [];
    this.relatedArticles = data.relatedArticles || [];
  }

  render() {
    const sourcesList = this.sources.map(source => `<li>${source}</li>`).join('');
    const relatedList = this.relatedArticles.map(article => 
      `<li><a href="${article.url}">${article.title}</a></li>`
    ).join('');

    return `
      <article class="report-article">
        <h2>${this.title}</h2>
        <div class="metadata">
          <span class="location">${this.location}</span>
          <span class="author">Por: ${this.author}</span>
          <span class="date">${new Date(this.date).toLocaleDateString()}</span>
        </div>
        <div class="content">${this.content}</div>
        ${sourcesList ? `
          <div class="sources">
            <h3>Fuentes:</h3>
            <ul>${sourcesList}</ul>
          </div>
        ` : ''}
        ${relatedList ? `
          <div class="related">
            <h3>Artículos relacionados:</h3>
            <ul>${relatedList}</ul>
          </div>
        ` : ''}
      </article>
    `;
  }
}

// Factory Method para crear artículos
export class ArticleFactory {
  static createArticle(type, data) {
    switch (type.toLowerCase()) {
      case 'news':
        return new NewsArticle(data);
      case 'opinion':
        return new OpinionArticle(data);
      case 'report':
        return new ReportArticle(data);
      default:
        throw new Error(`Tipo de artículo desconocido: ${type}`);
    }
  }
}