// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/claude/example1.1.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/claude/example1.2.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/claude/example1.3.js';

// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/deepseek.r1/example1.1.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/deepseek.r1/example1.2.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/deepseek.r1/example1.3.js';

// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gemini-2.0/example1.1.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gemini-2.0/example1.2.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gemini-2.0/example1.3.js'; 

// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gpt-4o1-p/example1.1.js';
// import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gpt-4o1-p/example1.2.js';
import {NormalPlay, MediaPlayer, ShufflePlay, LoopPlay} from '../../src/strategy/case-1/gpt-4o1-p/example1.3.js'; 

describe('MediaPlayer y sus estrategias', () => {
  // 1. Encapsulación de algoritmos
  describe('1. Encapsulación de algoritmos', () => {
    test('1.1 NormalPlay avanza o devuelve null si no hay más tracks', () => {
      const normalPlay = new NormalPlay();
      const playlist = ['track1', 'track2'];
      expect(normalPlay.playNext(playlist)).toBe('track1'); // Avanza al siguiente track
      expect(normalPlay.playNext(playlist)).toBe('track2'); // Avanza al siguiente track
      expect(normalPlay.playNext(playlist)).toBeNull(); // Fin de la lista
    });

  });

  // 2. Intercambio en tiempo de ejecución
  describe('2. Intercambio en tiempo de ejecución', () => {
    test('2.1 MediaPlayer permite cambiar de estrategia dinámicamente', () => {
      const mediaPlayer = new MediaPlayer(new NormalPlay());
      mediaPlayer.setPlaylist(['track1', 'track2']);

      expect(mediaPlayer.playNext()).toBe('track1'); // NormalPlay: Avanza
      expect(mediaPlayer.playNext()).toBe('track2'); // NormalPlay: Avanza

      mediaPlayer.setPlayStrategy(new LoopPlay());
      expect(mediaPlayer.playNext()).toBe('track1'); // LoopPlay: Vuelve al inicio
    });
  });

  // 3. Retornos de valores esperados
  describe('3. Retornos de valores esperados', () => {
    test('3.1 NormalPlay devuelve null cuando no hay más tracks', () => {
      const normalPlay = new NormalPlay();
      const playlist = ['track1'];
      expect(normalPlay.playNext(playlist)).toBe('track1'); // Único track
      expect(normalPlay.playNext(playlist)).toBeNull(); // Fin de la lista
    });

  });
});