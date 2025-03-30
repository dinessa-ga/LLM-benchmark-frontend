//1

// ArticleCard.js
export class ArticleCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Render method must be implemented by subclass');
  }
}

// NewsArticle.js
import { ArticleCard } from './ArticleCard.js';

export class NewsArticle extends ArticleCard {
  render() {
    return `
      <article class="news">
        <h2>${this.data.title}</h2>
        <div class="meta">
          <span class="date">${this.data.date}</span>
          <span class="source">${this.data.source}</span>
        </div>
        <p class="content">${this.data.content}</p>
      </article>
    `;
  }
}

// OpinionArticle.js
import { ArticleCard } from './ArticleCard.js';

export class OpinionArticle extends ArticleCard {
  render() {
    return `
      <article class="opinion">
        <h2>${this.data.title}</h2>
        <div class="author">${this.data.author}</div>
        <p class="content">${this.data.content}</p>
        <blockquote>${this.data.excerpt}</blockquote>
      </article>
    `;
  }
}

// ReportArticle.js
import { ArticleCard } from './ArticleCard.js';

export class ReportArticle extends ArticleCard {
  render() {
    return `
      <article class="report">
        <h1>${this.data.title}</h1>
        <div class="summary">${this.data.summary}</div>
        <div class="charts">${this.data.charts}</div>
        <div class="details">${this.data.details}</div>
      </article>
    `;
  }
}

// ArticleFactory.js
import { NewsArticle } from './NewsArticle.js';
import { OpinionArticle } from './OpinionArticle.js';
import { ReportArticle } from './ReportArticle.js';

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
        throw new Error(`Unknown article type: ${type}`);
    }
  }
}