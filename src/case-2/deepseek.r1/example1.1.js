//1

class ArticleCard {
  constructor(data) {
    this.title = data.title || "Untitled";
  }

  render() {
    throw new Error("Render method must be implemented by subclass");
  }
}

class NewsArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.date = data.date || "Unknown date";
    this.location = data.location || "Unknown location";
  }

  render() {
    return `
      <div class="news-article">
        <h2>${this.title}</h2>
        <p class="date">📅 ${this.date}</p>
        <p class="location">📍 ${this.location}</p>
      </div>
    `;
  }
}

class OpinionArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.author = data.author || "Anonymous";
    this.viewCount = data.viewCount || 0;
  }

  render() {
    return `
      <div class="opinion-article">
        <h2>${this.title}</h2>
        <p class="author">✍️ ${this.author}</p>
        <p class="views">👀 ${this.viewCount} views</p>
      </div>
    `;
  }
}

class ReportArticle extends ArticleCard {
  constructor(data) {
    super(data);
    this.summary = data.summary || "No summary available";
    this.pageCount = data.pageCount || 0;
  }

  render() {
    return `
      <div class="report-article">
        <h2>${this.title}</h2>
        <p class="summary">📑 ${this.summary}</p>
        <p class="pages">📄 ${this.pageCount} pages</p>
      </div>
    `;
  }
}

export default class ArticleFactory  {
  createArticle(type, data) {
    switch (type) {
      case "news":
        return new NewsArticle(data);
      case "opinion":
        return new OpinionArticle(data);
      case "report":
        return new ReportArticle(data);
      default:
        throw new Error(`Invalid article type: ${type}`);
    }
  }
};
