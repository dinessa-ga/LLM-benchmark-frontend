//1
// Clase base para todas las tarjetas de medios
class MediaCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('El método render() debe ser implementado por las clases hijas');
  }
}

// Clase para películas
class MovieCard extends MediaCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="movie-card">
        <h2>${this.data.title}</h2>
        <p>Director: ${this.data.director}</p>
        <p>Año: ${this.data.year}</p>
        <p>Duración: ${this.data.duration} min</p>
        <div class="rating">⭐ ${this.data.rating}/10</div>
      </div>
    `;
  }
}

// Clase para series
class SeriesCard extends MediaCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="series-card">
        <h2>${this.data.title}</h2>
        <p>Creador: ${this.data.creator}</p>
        <p>Temporadas: ${this.data.seasons}</p>
        <p>Episodios: ${this.data.episodes}</p>
        <div class="rating">⭐ ${this.data.rating}/10</div>
      </div>
    `;
  }
}

// Clase para documentales
class DocumentaryCard extends MediaCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="documentary-card">
        <h2>${this.data.title}</h2>
        <p>Director: ${this.data.director}</p>
        <p>Año: ${this.data.year}</p>
        <p>Tema: ${this.data.subject}</p>
        <div class="rating">⭐ ${this.data.rating}/10</div>
      </div>
    `;
  }
}

// Factory Method para crear tarjetas de medios
class MediaFactory {
  static createMediaCard(type, data) {
    switch(type.toLowerCase()) {
      case 'movie':
        return new MovieCard(data);
      case 'series':
        return new SeriesCard(data);
      case 'documentary':
        return new DocumentaryCard(data);
      default:
        throw new Error(`Tipo de media no soportado: ${type}`);
    }
  }
}

// Exportar todas las clases
export { MediaCard, MovieCard, SeriesCard, DocumentaryCard, MediaFactory };
