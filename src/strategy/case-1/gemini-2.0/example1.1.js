//1
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
  playNext(playlist) {
    if (!playlist || playlist.length === 0) {
      return null; // No hay canciones en la lista de reproducción
    }

    if (!this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = (this.currentIndex + 1) % playlist.length;
    }

    return playlist[this.currentIndex];
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
    this.currentIndex++; // Always increment the index, loops around thanks to modulo
    return song;
  }
}


export class ShufflePlay {
  constructor() {
    this.playedIndices = new Set(); // To avoid playing the same song immediately
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (!playlist || playlist.length === 0) {
      return null; // No hay canciones en la lista de reproducción
    }

    if (this.playedIndices.size === playlist.length) {
      this.playedIndices.clear(); // Reset if all songs have been played
    }


    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * playlist.length);
    } while (this.playedIndices.has(randomIndex));


    this.playedIndices.add(randomIndex);
    this.currentIndex = randomIndex;
    return playlist[randomIndex];
  }
}


// Ejemplo de uso (fuera del archivo - en otro archivo .js)
// import { MediaPlayer, NormalPlay, LoopPlay, ShufflePlay } from './MediaPlayer.js';

// const playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];

// const normalPlayer = new MediaPlayer(new NormalPlay());
// console.log("Normal Play:");
// console.log(normalPlayer.playNext(playlist)); // Song 1
// console.log(normalPlayer.playNext(playlist)); // Song 2
// console.log(normalPlayer.playNext(playlist)); // Song 3
// console.log(normalPlayer.playNext(playlist)); // Song 4
// console.log(normalPlayer.playNext(playlist)); // Song 1

// const loopPlayer = new MediaPlayer(new LoopPlay());
// console.log("\nLoop Play:");
// console.log(loopPlayer.playNext(playlist)); // Song 1
// console.log(loopPlayer.playNext(playlist)); // Song 2
// console.log(loopPlayer.playNext(playlist)); // Song 3
// console.log(loopPlayer.playNext(playlist)); // Song 4
// console.log(loopPlayer.playNext(playlist)); // Song 1

// const shufflePlayer = new MediaPlayer(new ShufflePlay());
// console.log("\nShuffle Play:");
// console.log(shufflePlayer.playNext(playlist)); // Song (random)
// console.log(shufflePlayer.playNext(playlist)); // Song (another random)

// shufflePlayer.setStrategy(new NormalPlay());
// console.log("\nSwitch to Normal Play:");
// console.log(shufflePlayer.playNext(playlist)); // Song 1 (since it's a new NormalPlay)

