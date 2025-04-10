// 2
// media-cards.js
export class MediaCard {
  render() {
    throw new Error("Method 'render()' must be implemented");
  }
}

export class MovieCard extends MediaCard {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    return `
      <article class="media-card movie">
        <h3 class="title">${this.data.title}</h3>
        <div class="details">
          <p>Year: ${this.data.releaseYear}</p>
          <p>Director: ${this.data.director}</p>
          <p>Duration: ${this.data.duration} minutes</p>
          <div class="rating">★ ${this.data.rating}/10</div>
        </div>
      </article>
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
      <article class="media-card series">
        <h3 class="title">${this.data.title}</h3>
        <div class="details">
          <p>Seasons: ${this.data.seasons}</p>
          <p>Episodes: ${this.data.totalEpisodes}</p>
          <p>Network: ${this.data.network}</p>
          <p>Genre: ${this.data.genre.join(", ")}</p>
        </div>
      </article>
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
      <article class="media-card documentary">
        <h3 class="title">${this.data.title}</h3>
        <div class="details">
          <p>Subject: ${this.data.subject}</p>
          <p>Release: ${this.data.releaseYear}</p>
          <p>Runtime: ${this.data.runtime} minutes</p>
          <p>Language: ${this.data.language}</p>
        </div>
      </article>
    `;
  }
}

export class MediaFactory {
  static createMediaCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    switch(normalizedType) {
      case "movie":
        return new MovieCard(data);
      case "series":
        case "tvshow":
          return new SeriesCard(data);
      case "documentary":
        return new DocumentaryCard(data);
      default:
        throw new Error(`Unsupported media type: ${type}`);
    }
  }
}
