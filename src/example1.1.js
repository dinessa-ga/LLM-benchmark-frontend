//1

// article-module.js
export class ArticleCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Método render debe ser implementado");
  }
}

export class NewsArticle extends ArticleCard {
  render() {
    return `
      <article class="news-card">
        <header>
          <h2>${this.data.title}</h2>
          <div class="meta">
            <span class="source">${this.data.source}</span>
            <time>${new Date(this.data.publishDate).toLocaleDateString()}</time>
          </div>
        </header>
        <section class="content">
          <p>${this.data.summary}</p>
        </section>
      </article>
    `;
  }
}

export class OpinionArticle extends ArticleCard {
  render() {
    return `
      <article class="opinion-card">
        <h3>${this.data.title}</h3>
        <div class="author-info">
          <img src="${this.data.authorImage}" alt="${this.data.author}">
          <span>${this.data.author}</span>
        </div>
        <div class="opinion-content">
          ${this.data.content}
        </div>
        <div class="ratings">
          Valoración: ${'★'.repeat(this.data.rating)}${'☆'.repeat(5 - this.data.rating)}
        </div>
      </article>
    `;
  }
}

export class ReportArticle extends ArticleCard {
  render() {
    return `
      <article class="report-card">
        <h2>${this.data.title}</h2>
        <div class="report-meta">
          <span>Duración: ${this.data.duration} minutos</span>
          <span>Equipo: ${this.data.team.join(', ')}</span>
        </div>
        <div class="key-findings">
          <h4>Hallazgos principales:</h4>
          <ul>
            ${this.data.findings.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <a href="${this.data.fullReportUrl}" class="cta">Ver informe completo</a>
      </article>
    `;
  }
}

export class ArticleFactory {
  static createArticle(type, data) {
    const normalizedType = type.toLowerCase().replace(/\s+/g, '');
    
    switch(normalizedType) {
      case 'news':
        return new NewsArticle(data);
      case 'opinion':
        return new OpinionArticle(data);
      case 'report':
        return new ReportArticle(data);
      default:
        throw new Error(`Tipo de artículo no reconocido: ${type}`);
    }
  }
}