//3
// MediaPlayer.js
export class MediaPlayer {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  playNext(playlist) {
    return this.strategy.playNext(playlist);
  }
}

export class NormalPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (!playlist || playlist.length === 0) {
      return null; // No hay canciones en la lista de reproducción
    }

    const song = playlist[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % playlist.length;
    return song;
  }
}

export class LoopPlay {
    constructor() {
        this.currentIndex = 0;
    }

    playNext(playlist) {
        if (!playlist || playlist.length === 0) {
            return null; // No hay canciones en la lista de reproducción
        }

        const song = playlist[this.currentIndex % playlist.length];
        this.currentIndex = (this.currentIndex + 1); // Increment index for next call
        return song;
    }
}


export class ShufflePlay {
  playNext(playlist) {
    if (!playlist || playlist.length === 0) {
      return null; // No hay canciones en la lista de reproducción
    }

    const randomIndex = Math.floor(Math.random() * playlist.length);
    return playlist[randomIndex];
  }
}