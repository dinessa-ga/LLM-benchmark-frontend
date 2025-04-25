// 2
// media-factory.js
class MediaCard {
  constructor(title, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

class MovieCard extends MediaCard {
  constructor(title, description, imageUrl, director, releaseYear) {
    super(title, description, imageUrl);
    this.director = director;
    this.releaseYear = releaseYear;
  }

  render() {
    return `
      <div class="movie-card">
        <img src="${this.imageUrl}" alt="${this.title}" />
        <h3>${this.title} (${this.releaseYear})</h3>
        <p>Director: ${this.director}</p>
        <p>${this.description}</p>
      </div>
    `;
  }
}

class SeriesCard extends MediaCard {
  constructor(title, description, imageUrl, seasons, episodes) {
    super(title, description, imageUrl);
    this.seasons = seasons;
    this.episodes = episodes;
  }

  render() {
    return `
      <div class="series-card">
        <img src="${this.imageUrl}" alt="${this.title}" />
        <h3>${this.title}</h3>
        <p>Seasons: ${this.seasons}, Episodes: ${this.episodes}</p>
        <p>${this.description}</p>
      </div>
    `;
  }
}

class DocumentaryCard extends MediaCard {
  constructor(title, description, imageUrl, topic, duration) {
    super(title, description, imageUrl);
    this.topic = topic;
    this.duration = duration;
  }

  render() {
    return `
      <div class="documentary-card">
        <img src="${this.imageUrl}" alt="${this.title}" />
        <h3>${this.title}</h3>
        <p>Topic: ${this.topic}, Duration: ${this.duration} minutes</p>
        <p>${this.description}</p>
      </div>
    `;
  }
}


const MediaFactory = {
  createMediaCard(type, data) {
    switch (type) {
      case "movie":
        return new MovieCard(
          data.title,
          data.description,
          data.imageUrl,
          data.director,
          data.releaseYear
        );
      case "series":
        return new SeriesCard(
          data.title,
          data.description,
          data.imageUrl,
          data.seasons,
          data.episodes
        );
      case "documentary":
        return new DocumentaryCard(
          data.title,
          data.description,
          data.imageUrl,
          data.topic,
          data.duration
        );
      default:
        throw new Error(`Invalid media type: ${type}`);
    }
  },
};

export { MediaCard, MovieCard, SeriesCard, DocumentaryCard, MediaFactory };