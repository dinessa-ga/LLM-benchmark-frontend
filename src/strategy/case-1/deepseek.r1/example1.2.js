// 2
// media-player.js
export class NormalPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (this.currentIndex >= playlist.length) return null;
    const song = playlist[this.currentIndex];
    this.currentIndex++;
    return song;
  }
}

export class LoopPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    const song = playlist[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % playlist.length;
    return song;
  }
}

export class ShufflePlay {
  playNext(playlist) {
    return playlist[Math.floor(Math.random() * playlist.length)];
  }
}

export class MediaPlayer {
  constructor(playlist = [], strategy = new NormalPlay()) {
    this.playlist = playlist;
    this.strategy = strategy;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  playNext() {
    return this.strategy.playNext(this.playlist);
  }
}
