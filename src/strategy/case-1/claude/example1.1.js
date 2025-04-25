//1
// media-player.js

// Interfaz de estrategia (implícita en JavaScript)
// Todas las estrategias deben implementar playNext(playlist)

// Estrategia de reproducción normal (secuencial)
export class NormalPlay {
  constructor() {
    this.currentIndex = 0;
  }

  playNext(playlist) {
    if (playlist.length === 0) return null;
    
    // Avanza al siguiente elemento
    if (this.currentIndex >= playlist.length) {
      // Si llegamos al final, nos detenemos (devolvemos null)
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
    
    // Avanza al siguiente elemento y vuelve al principio si es necesario
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
    
    // Si ya hemos reproducido todas las canciones, terminamos
    if (this.playedIndices.size >= playlist.length) {
      return null;
    }
    
    // Encontrar una canción que no hayamos reproducido aún
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * playlist.length);
    } while (this.playedIndices.has(randomIndex));
    
    // Marcar esta canción como reproducida
    this.playedIndices.add(randomIndex);
    
    return playlist[randomIndex];
  }

  // Método adicional para reiniciar la reproducción aleatoria
  reset() {
    this.playedIndices.clear();
  }
}

// Clase principal del reproductor de medios
export class MediaPlayer {
  constructor(playStrategy) {
    // Inicializar con una estrategia por defecto si no se proporciona
    this.playStrategy = playStrategy || new NormalPlay();
    this.playlist = [];
  }

  // Establecer la lista de reproducción
  setPlaylist(tracks) {
    this.playlist = [...tracks];
    return this;
  }

  // Cambiar la estrategia de reproducción en tiempo de ejecución
  setPlayStrategy(playStrategy) {
    this.playStrategy = playStrategy;
    return this;
  }

  // Reproducir la siguiente pista según la estrategia actual
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

// Ejemplo de uso:
/* 
import { MediaPlayer, NormalPlay, LoopPlay, ShufflePlay } from './media-player.js';

const playlist = ['Canción 1', 'Canción 2', 'Canción 3', 'Canción 4'];

// Crear reproductor con estrategia normal
const player = new MediaPlayer(new NormalPlay());
player.setPlaylist(playlist);

// Reproducir algunas canciones
player.playNext(); // Canción 1
player.playNext(); // Canción 2

// Cambiar a estrategia de bucle
player.setPlayStrategy(new LoopPlay());
player.playNext(); // Canción 3
player.playNext(); // Canción 4
player.playNext(); // Canción 1 (vuelve al principio)

// Cambiar a estrategia aleatoria
player.setPlayStrategy(new ShufflePlay());
player.playNext(); // Canción aleatoria
*/
