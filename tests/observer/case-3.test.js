import {ContentCreator} from '../../src/observer/case-3/claude/example1.1.js';
import {ContentCreator} from '../../src/observer/case-3/claude/example1.2.js';
import {ContentCreator} from '../../src/observer/case-3/claude/example1.3.js';

import {ContentCreator} from '../../src/observer/case-3/deepseek.r1/example1.1.js';
import {ContentCreator} from '../../src/observer/case-3/deepseek.r1/example1.2.js';
import {ContentCreator} from '../../src/observer/case-3/deepseek.r1/example1.3.js';

import {ContentCreator} from '../../src/observer/case-3/gemini-2.0/example1.1.js';
import {ContentCreator} from '../../src/observer/case-3/gemini-2.0/example1.2.js';
import {ContentCreator} from '../../src/observer/case-3/gemini-2.0/example1.3.js'; 

import {ContentCreator} from '../../src/observer/case-3/gpt-4o1-p/example1.1.js';
import {ContentCreator} from '../../src/observer/case-3/gpt-4o1-p/example1.2.js';
import {ContentCreator} from '../../src/observer/case-3/gpt-4o1-p/example1.3.js'; 

// Pruebas para la clase ContentCreator

describe('ContentCreator', () => {
  let contentCreator;

  beforeEach(() => {
    // Se crea una nueva instancia de ContentCreator antes de cada prueba
    contentCreator = new ContentCreator();
  });

  // Criterio 1: Registro dinámico de observadores
  describe('Registro dinámico de observadores', () => {
    test('Se pueden agregar seguidores en tiempo real con subscribe', () => {
      // Arrange: Crear un observador simulado
      const observer = jest.fn();

      // Act: Agregar el observador al creador de contenido
      contentCreator.subscribe(observer);

      // Assert: Verificar que el observador fue agregado correctamente
      expect(contentCreator.subscribers).toContain(observer);
    });

    test('No se permite agregar el mismo observador más de una vez', () => {
      // Arrange: Crear un observador simulado
      const observer = jest.fn();

      // Act: Intentar agregar el mismo observador dos veces
      contentCreator.subscribe(observer);
      contentCreator.subscribe(observer);

      // Assert: Verificar que el observador solo fue agregado una vez
      expect(contentCreator.subscribers.length).toBe(1);
    });
  });

  // Criterio 2: Notificaciones eficientes
  describe('Notificaciones eficientes', () => {
    test('Al publicar un post, todos los seguidores deben recibir una notificación con el contenido', () => {
      // Arrange: Crear dos observadores simulados
      const observer1 = jest.fn();
      const observer2 = jest.fn();

      // Act: Agregar los observadores y publicar un post
      contentCreator.subscribe(observer1);
      contentCreator.subscribe(observer2);
      const postContent = 'Nuevo post interesante';
      contentCreator.publish(postContent);

      // Assert: Verificar que ambos observadores recibieron la notificación con el contenido correcto
      expect(observer1).toHaveBeenCalledWith(postContent);
      expect(observer2).toHaveBeenCalledWith(postContent);
    });

    test('Los observadores no deben recibir notificaciones si no están registrados', () => {
      // Arrange: Crear un observador simulado
      const observer = jest.fn();

      // Act: Publicar un post sin haber registrado el observador
      const postContent = 'Nuevo post interesante';
      contentCreator.publish(postContent);

      // Assert: Verificar que el observador no fue llamado
      expect(observer).not.toHaveBeenCalled();
    });
  });

  // Criterio 3: Eficiencia de recursos
  describe('Eficiencia de recursos', () => {
    test('Los observadores no deben recibir notificaciones duplicadas', () => {
      // Arrange: Crear un observador simulado
      const observer = jest.fn();

      // Act: Agregar el observador y publicar el mismo post dos veces
      contentCreator.subscribe(observer);
      const postContent = 'Nuevo post interesante';
      contentCreator.publish(postContent);
      contentCreator.publish(postContent);

      // Assert: Verificar que el observador fue llamado exactamente una vez por cada publicación
      expect(observer).toHaveBeenCalledTimes(2);
    });

    test('Un observador eliminado no debe recibir más notificaciones', () => {
      // Arrange: Crear un observador simulado
      const observer = jest.fn();

      // Act: Agregar el observador, eliminarlo y luego publicar un post
      contentCreator.subscribe(observer);
      contentCreator.unsubscribe(observer);
      const postContent = 'Nuevo post interesante';
      contentCreator.publish(postContent);

      // Assert: Verificar que el observador no fue llamado después de ser eliminado
      expect(observer).not.toHaveBeenCalled();
    });
  });
});