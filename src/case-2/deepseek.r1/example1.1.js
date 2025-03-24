//1

class ArticleCard {
  constructor(data) {
    this.title = data.title;
    this.content = data.content;
  }

  render() {
    throw new Error('Método render debe ser implementado');
  }
}

class NewsArticleCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.date = data.date;
    this.category = data.category;
  }

  render() {
    return `
      <div class="card news">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <div class="meta">
          <time>${this.date}</time>
          <span class="category">${this.category}</span>
        </div>
      </div>
    `;
  }
}

class OpinionArticleCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.author = data.author;
  }

  render() {
    return `
      <div class="card opinion">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <div class="author">✍️ ${this.author}</div>
      </div>
    `;
  }
}

class ArticleCardFactory {
  static types = {};

  static registerType(type, CardClass) {
    this.types[type] = CardClass;
  }

  static create(type, data) {
    const Card = this.types[type];
    if (!Card) throw new Error(`Tipo no soportado: ${type}`);
    return new Card(data);
  }
}

// Registro de tipos básicos
ArticleCardFactory.registerType('news', NewsArticleCard);
ArticleCardFactory.registerType('opinion', OpinionArticleCard);

// Uso
const newsCard = ArticleCardFactory.create('news', {
  title: 'Nuevo descubrimiento científico',
  content: 'Investigadores encuentran...',
  date: '2024-03-20',
  category: 'Ciencia'
});

const opinionCard = ArticleCardFactory.create('opinion', {
  title: 'El futuro de la IA',
  content: 'Debemos regular...',
  author: 'Dra. Pérez'
});

// Para añadir nuevo tipo (sin modificar fábrica)
class ReportageArticleCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.location = data.location;
    this.photos = data.photos;
  }

  render() {
    return `
      <div class="card reportage">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <div class="gallery">${this.photos.map(p => `<img src="${p}">`).join('')}</div>
        <div class="location">📍 ${this.location}</div>
      </div>
    `;
  }
}

ArticleCardFactory.registerType('reportage', ReportageArticleCard);
