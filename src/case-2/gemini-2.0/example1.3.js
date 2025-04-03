//3
// article.js

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

class NewsArticle extends ArticleCard {
  constructor(title, author, content, source) {
    super(title, author, content);
    this.source = source;
  }

  render() {
    return `
      <div class="article news">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author} - Source: ${this.source}</p>
        <p>${this.content}</p>
      </div>
    `;
  }
}

class OpinionArticle extends ArticleCard {
  constructor(title, author, content, opinion) {
    super(title, author, content);
    this.opinion = opinion;
  }

  render() {
    return `
      <div class="article opinion">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author}</p>
        <p>${this.content}</p>
        <p class="opinion"><strong>Opinion:</strong> ${this.opinion}</p>
      </div>
    `;
  }
}

class ReportArticle extends ArticleCard {
  constructor(title, author, content, date) {
    super(title, author, content);
    this.date = date;
  }

  render() {
    return `
      <div class="article report">
        <h2>${this.title}</h2>
        <p class="author">By ${this.author} - Date: ${this.date}</p>
        <p>${this.content}</p>
      </div>
    `;
  }
}

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

export { ArticleCard, NewsArticle, OpinionArticle, ReportArticle, ArticleFactory };