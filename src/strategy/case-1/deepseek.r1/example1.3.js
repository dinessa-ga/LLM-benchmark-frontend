//3
// media-player-strategy.js
export class NormalPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (this.currentIndex >= playlist.length) return null;
    return playlist[this.currentIndex++];
  }
}

export class LoopPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (playlist.length === 0) return null;
    const song = playlist[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % playlist.length;
    return song;
  }
}

export class ShufflePlay {
  playNext(playlist) {
    if (playlist.length === 0) return null;
    return playlist[Math.floor(Math.random() * playlist.length)];
  }
}

export class MediaPlayer {
  constructor(playlist = [], strategy = new NormalPlay()) {
    this.playlist = playlist;
    this.strategy = strategy;
  }

  setPlaylist(newPlaylist) {
    this.playlist = newPlaylist;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  playNext() {
    return this.strategy.playNext(this.playlist);
  }

  addSong(song) {
    this.playlist.push(song);
  }
}