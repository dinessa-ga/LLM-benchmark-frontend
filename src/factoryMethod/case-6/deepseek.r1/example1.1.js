//1
export class MediaCard {
  render() {
    throw new Error("Render method must be implemented");
  }
}

export class MovieCard extends MediaCard {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    return `
      <div class="movie-card">
        <h2>${this.data.title} (${this.data.year})</h2>
        <p>Director: ${this.data.director}</p>
        <p>Rating: ${this.data.rating}/10</p>
      </div>
    `;
  }
}

export class SeriesCard extends MediaCard {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    return `
      <div class="series-card">
        <h2>${this.data.title}</h2>
        <p>Seasons: ${this.data.seasons}</p>
        <p>Episodes: ${this.data.episodes}</p>
        <p>Genre: ${this.data.genre}</p>
      </div>
    `;
  }
}

export class DocumentaryCard extends MediaCard {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    return `
      <div class="documentary-card">
        <h2>${this.data.title}</h2>
        <p>Topic: ${this.data.topic}</p>
        <p>Year: ${this.data.year}</p>
        <p>Duration: ${this.data.duration} mins</p>
      </div>
    `;
  }
}

export class MediaFactory {
  static createMediaCard(type, data) {
    const normalizedType = type.toLowerCase();
    
    switch(normalizedType) {
      case "movie":
        return new MovieCard(data);
      case "series":
        return new SeriesCard(data);
      case "documentary":
        return new DocumentaryCard(data);
      default:
        throw new Error(`Unknown media type: ${type}`);
    }
  }
}

