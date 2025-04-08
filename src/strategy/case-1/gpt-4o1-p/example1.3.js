//3
// Interfaz de estrategia (implícita en JavaScript)
// Todas las estrategias deben implementar playNext(playlist)

// Estrategia de reproducción normal (secuencial)
export class NormalPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (playlist.length === 0) return null;

    if (this.currentIndex >= playlist.length) {
      return null;
    }

    const track = playlist[this.currentIndex];
    this.currentIndex++;
    return track;
  }
}

// Estrategia de reproducción en bucle
export class LoopPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (playlist.length === 0) return null;

    if (this.currentIndex >= playlist.length) {
      this.currentIndex = 0;
    }

    const track = playlist[this.currentIndex];
    this.currentIndex++;
    return track;
  }
}

// Estrategia de reproducción aleatoria
export class ShufflePlay {
  constructor() {
    this.playedIndices = new Set();
  }

  playNext(playlist) {
    if (playlist.length === 0) return null;

    if (this.playedIndices.size >= playlist.length) {
      return null;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * playlist.length);
    } while (this.playedIndices.has(randomIndex));
    this.playedIndices.add(randomIndex);

    return playlist[randomIndex];
  }

  reset() {
    this.playedIndices.clear();
  }
}

// Clase principal del reproductor de medios
export class MediaPlayer {
  constructor(playStrategy) {
    this.playStrategy = playStrategy || new NormalPlay();
    this.playlist = [];
  }

  setPlaylist(tracks) {
    this.playlist = [...tracks];
    return this;
  }

  setPlayStrategy(playStrategy) {
    this.playStrategy = playStrategy;
    return this;
  }

  playNext() {
    const nextTrack = this.playStrategy.playNext(this.playlist);
    if (nextTrack) {
      console.log(`Reproduciendo: ${nextTrack}`);
    } else {
      console.log('Fin de la reproducción');
    }
    return nextTrack;
  }
}