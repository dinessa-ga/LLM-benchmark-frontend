// 2

// Clase base abstracta para tarjetas
class ArticleCard {
  constructor(data) {
    if (new.target === ArticleCard) {
      throw new Error("No se puede instanciar la clase abstracta ArticleCard");
    }
    this.title = data.title;
    this.content = data.content;
  }

  render() {
    throw new Error("Método 'render' debe ser implementado");
  }
}

// Implementaciones concretas
class NewsCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.date = data.date;
    this.category = data.category;
  }

  render() {
    return `
      <article class="card news">
        <h2>${this.title}</h2>
        <div class="content">${this.content}</div>
        <div class="meta">
          <span class="date">📅 ${this.date}</span>
          <span class="category">🏷️ ${this.category}</span>
        </div>
      </article>
    `;
  }
}

class OpinionCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.author = data.author;
  }

  render() {
    return `
      <article class="card opinion">
        <h2>${this.title}</h2>
        <div class="content">${this.content}</div>
        <div class="author">✍️ ${this.author}</div>
      </article>
    `;
  }
}

class ReportageCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.location = data.location;
    this.photos = data.photos;
  }

  render() {
    return `
      <article class="card reportage">
        <h2>${this.title}</h2>
        <div class="content">${this.content}</div>
        <div class="gallery">
          ${this.photos.map(photo => `<img src="${photo}" alt="Reportage photo">`).join('')}
        </div>
        <div class="location">📍 ${this.location}</div>
      </article>
    `;
  }
}

// Factory Method con registro dinámico
class ArticleCardFactory {
  static cardTypes = {};

  static registerType(type, CardClass) {
    if (!(CardClass.prototype instanceof ArticleCard)) {
      throw new Error("El tipo de tarjeta debe heredar de ArticleCard");
    }
    this.cardTypes[type] = CardClass;
  }

  static create(type, data) {
    const CardClass = this.cardTypes[type];
    if (!CardClass) {
      throw new Error(`Tipo de tarjeta no válido: ${type}`);
    }
    return new CardClass(data);
  }
}

// Registramos los tipos iniciales
ArticleCardFactory.registerType('news', NewsCard);
ArticleCardFactory.registerType('opinion', OpinionCard);
ArticleCardFactory.registerType('reportage', ReportageCard);

// Ejemplo de uso
const newsData = {
  title: 'Avances en inteligencia artificial',
  content: 'Nuevos desarrollos revolucionan el campo de la IA...',
  date: '2024-03-20',
  category: 'Tecnología'
};

const opinionData = {
  title: 'Reflexiones sobre la educación moderna',
  content: 'La educación necesita una reforma urgente...',
  author: 'Carlos Martínez'
};

const newsCard = ArticleCardFactory.create('news', newsData);
const opinionCard = ArticleCardFactory.create('opinion', opinionData);

// Para agregar nuevo tipo (sin modificar la fábrica)
class InterviewCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.interviewee = data.interviewee;
    this.duration = data.duration;
  }

  render() {
    return `
      <article class="card interview">
        <h2>${this.title}</h2>
        <div class="content">${this.content}</div>
        <div class="details">
          <span>🎤 Entrevistado: ${this.interviewee}</span>
          <span>⏱️ Duración: ${this.duration} minutos</span>
        </div>
      </article>
    `;
  }
}

// Registramos el nuevo tipo
ArticleCardFactory.registerType('interview', InterviewCard);