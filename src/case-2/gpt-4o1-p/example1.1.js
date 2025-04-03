//1

// ...existing code...

export class ArticleCard {
  constructor(data) {
    this.title = data.title;
    this.content = data.content;
  }

  render() {
    return `Título: ${this.title}\nContenido: ${this.content}`;
  }
}

export class NewsArticle extends ArticleCard {
  render() {
    return `Noticia: ${this.title}\n${this.content}`;
  }
}

export class OpinionArticle extends ArticleCard {
  render() {
    return `Opinión: ${this.title}\n${this.content}`;
  }
}

export class ReportArticle extends ArticleCard {
  render() {
    return `Reporte: ${this.title}\n${this.content}`;
  }
}

export class ArticleFactory {
  static createArticle(type, data) {
    switch (type) {
      case 'news':
        return new NewsArticle(data);
      case 'opinion':
        return new OpinionArticle(data);
      case 'report':
        return new ReportArticle(data);
      default:
        throw new Error('Tipo de artículo no válido');
    }
  }
}