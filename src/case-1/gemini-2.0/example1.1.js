//1

// article.js
// Definición de la clase base ArticleCard
class ArticleCard {
  constructor(title, author, content) {
    if (this.constructor === ArticleCard) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.title = title;
    this.author = author;
    this.content = content;
  }

  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

// Definición de la clase NewsArticle
class NewsArticle extends ArticleCard {
  constructor(title, author, content, source) {
    super(title, author, content);
    this.source = source;
  }

  render() {
    return `
      <div class="news-article">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author} - Source: ${this.source}</p>
        <p>${this.content}</p>
      </div>
    `;
  }
}

// Definición de la clase OpinionArticle
class OpinionArticle extends ArticleCard {
  constructor(title, author, content, opinion) {
    super(title, author, content);
    this.opinion = opinion;
  }

  render() {
    return `
      <div class="opinion-article">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author}</p>
        <p>${this.content}</p>
        <p><strong>Opinion:</strong> ${this.opinion}</p>
      </div>
    `;
  }
}

// Definición de la clase ReportArticle
class ReportArticle extends ArticleCard {
  constructor(title, author, content, date) {
    super(title, author, content);
    this.date = date;
  }

  render() {
    return `
      <div class="report-article">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author} - Date: ${this.date}</p>
        <p>${this.content}</p>
      </div>
    `;
  }
}

// Definición de la clase ArticleFactory
class ArticleFactory {
  static createArticle(type, data) {
    switch (type) {
      case 'news':
        return new NewsArticle(data.title, data.author, data.content, data.source);
      case 'opinion':
        return new OpinionArticle(data.title, data.author, data.content, data.opinion);
      case 'report':
        return new ReportArticle(data.title, data.author, data.content, data.date);
      default:
        throw new Error(`Invalid article type: ${type}`);
    }
  }
}

// Exportación de las clases y la fábrica
export { ArticleCard, NewsArticle, OpinionArticle, ReportArticle, ArticleFactory };