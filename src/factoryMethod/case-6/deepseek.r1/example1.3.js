//3
// media-factory.js
export class MediaCard {
  render() {
    throw new Error("Render method must be implemented by subclasses");
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
        <header class="media-header">
          <h2>${this.data.title}</h2>
          <span class="media-badge">🎬 Movie</span>
        </header>
        <div class="media-content">
          <p>📅 ${this.data.year} | ⏳ ${this.data.duration} min</p>
          <p>🎥 Directed by ${this.data.director}</p>
          <div class="rating">⭐ ${this.data.rating}/10</div>
          ${this.data.awards ? `<p>🏆 ${this.data.awards.join(', ')}</p>` : ''}
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
        <header class="media-header">
          <h2>${this.data.title}</h2>
          <span class="media-badge">📺 Series</span>
        </header>
        <div class="media-content">
          <p>📅 ${this.data.startYear}${this.data.endYear ? ` - ${this.data.endYear}` : ''}</p>
          <p>📚 ${this.data.seasons} seasons | 📺 ${this.data.episodes} episodes</p>
          <p>🎭 ${this.data.genres.join(', ')}</p>
          ${this.data.ongoing ? '<div class="status">🔴 Currently Airing</div>' : ''}
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
        <header class="media-header">
          <h2>${this.data.title}</h2>
          <span class="media-badge">🌍 Documentary</span>
        </header>
        <div class="media-content">
          <p>📅 ${this.data.year} | 🌐 ${this.data.language}</p>
          <p>📚 Subject: ${this.data.subject}</p>
          <p>👥 Featuring: ${this.data.featuredParticipants.join(', ')}</p>
          <p>📍 Location: ${this.data.location}</p>
        </div>
      </article>
    `;
  }
}

export class MediaFactory {
  static createMediaCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    const typeMap = {
      'movie': MovieCard,
      'film': MovieCard,
      'series': SeriesCard,
      'tvshow': SeriesCard,
      'documentary': DocumentaryCard,
      'docu': DocumentaryCard
    };

    const CardClass = typeMap[normalizedType];
    
    if (!CardClass) {
      throw new Error(`Unsupported media type: ${type}. Valid types are: ${Object.keys(typeMap).join(', ')}`);
    }

    return new CardClass(data);
  }
}

// Example usage:
// const data = { title: "Planet Earth", year: 2006, ... };
// const card = MediaFactory.createMediaCard('documentary', data);
// document.body.innerHTML = card.render();