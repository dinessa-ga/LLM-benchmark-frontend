//3

// Clase base abstracta para todas las tarjetas
class ArticleCard {
  constructor(data) {
    if (new.target === ArticleCard) {
      throw new Error("No se puede instanciar la clase abstracta ArticleCard");
    }
    this.title = data.title;
    this.content = data.content;
  }

  render() {
    throw new Error("El método render debe ser implementado por las subclases");
  }
}

// Implementaciones concretas de tarjetas
class NewsCard extends ArticleCard {
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
          <span class="date">📅 ${this.date}</span>
          <span class="category">🏷️ ${this.category}</span>
        </div>
      </div>
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
      <div class="card opinion">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <div class="author highlight">✍️ ${this.author}</div>
      </div>
    `;
  }
}

class ReportageCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.location = data.location;
    this.duration = data.duration;
  }

  render() {
    return `
      <div class="card reportage">
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <div class="details">
          <span class="location">📍 ${this.location}</span>
          <span class="duration">⏱ ${this.duration} minutos</span>
        </div>
      </div>
    `;
  }
}

// Fábrica de tarjetas con registro dinámico
class ArticleCardFactory {
  static registry = new Map();

  static registerType(type, CardClass) {
    if (!CardClass.prototype instanceof ArticleCard) {
      throw new Error("Las tarjetas deben heredar de ArticleCard");
    }
    this.registry.set(type, CardClass);
  }

  static create(type, data) {
    const CardClass = this.registry.get(type);
    if (!CardClass) {
      throw new Error(`Tipo de tarjeta no soportado: ${type}`);
    }
    return new CardClass(data);
  }
}

// Registramos los tipos iniciales
ArticleCardFactory.registerType('news', NewsCard);
ArticleCardFactory.registerType('opinion', OpinionCard);
ArticleCardFactory.registerType('reportage', ReportageCard);

// Ejemplo de uso
const newsArticle = ArticleCardFactory.create('news', {
  title: 'Nuevo avance en medicina',
  content: 'Descubrimiento revolucionario en el tratamiento del cáncer...',
  date: '2024-03-21',
  category: 'Ciencia'
});

const opinionArticle = ArticleCardFactory.create('opinion', {
  title: 'La importancia de la educación',
  content: 'Necesitamos reformar el sistema educativo actual...',
  author: 'María González'
});

// Agregar nuevo tipo sin modificar la fábrica
class VideoCard extends ArticleCard {
  constructor(data) {
    super(data);
    this.videoUrl = data.videoUrl;
    this.views = data.views;
  }

  render() {
    return `
      <div class="card video">
        <h2>${this.title}</h2>
        <iframe src="${this.videoUrl}"></iframe>
        <p>${this.content}</p>
        <div class="views">👁️ ${this.views} visualizaciones</div>
      </div>
    `;
  }
}

ArticleCardFactory.registerType('video', VideoCard);

// Uso del nuevo tipo
const videoArticle = ArticleCardFactory.create('video', {
  title: 'Documental sobre el espacio',
  content: 'Explorando los misterios del universo...',
  videoUrl: 'https://example.com/video.mp4',
  views: 1500
});

// Renderizar las tarjetas
document.body.innerHTML = `
  ${newsArticle.render()}
  ${opinionArticle.render()}
  ${videoArticle.render()}
`;