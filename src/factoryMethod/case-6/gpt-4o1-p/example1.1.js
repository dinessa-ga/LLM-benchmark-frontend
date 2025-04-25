//1
// ...existing code...
export class MediaCard {
  constructor(data) {
    this.data = data;
  }
  render() {
    return "Render base de MediaCard";
  }
}

export class MovieCard extends MediaCard {
  render() {
    return `Mostrando película: ${this.data.title}`;
  }
}

export class SeriesCard extends MediaCard {
  render() {
    return `Mostrando serie: ${this.data.title}`;
  }
}

export class DocumentaryCard extends MediaCard {
  render() {
    return `Mostrando documental: ${this.data.title}`;
  }
}

export const MediaFactory = {
  createMediaCard(type, data) {
    switch (type.toLowerCase()) {
      case "movie":
        return new MovieCard(data);
      case "series":
        return new SeriesCard(data);
      case "documentary":
        return new DocumentaryCard(data);
      default:
        throw new Error("Tipo de media no reconocido");
    }
  },
};