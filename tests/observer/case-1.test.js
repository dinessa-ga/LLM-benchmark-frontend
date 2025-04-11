// import {NewsCategory} from '../../src/observer/case-1/claude/example1.1.js';
// import {NewsCategory} from '../../src/observer/case-1/claude/example1.2.js';
// import {NewsCategory} from '../../src/observer/case-1/claude/example1.3.js';

//import {NewsCategory} from '../../src/observer/case-1/deepseek.r1/example1.1.js';
// import {NewsCategory} from '../../src/observer/case-1/deepseek.r1/example1.2.js';
// import {NewsCategory} from '../../src/observer/case-1/deepseek.r1/example1.3.js';

// import {NewsCategory} from '../../src/observer/case-1/gemini-2.0/example1.1.js';
// import {NewsCategory} from '../../src/observer/case-1/gemini-2.0/example1.2.js';
// import {NewsCategory} from '../../src/observer/case-1/gemini-2.0/example1.3.js'; 

// import {NewsCategory} from '../../src/observer/case-1/gpt-4o1-p/example1.1.js';
// import {NewsCategory} from '../../src/observer/case-1/gpt-4o1-p/example1.2.js';
import {NewsCategory} from '../../src/observer/case-1/gpt-4o1-p/example1.3.js'; 

// newsCategory.test.js
describe('NewsCategory', () => {
  describe('1. Registro dinámico de observadores', () => {
    test('debe notificar a un usuario registrado al publicar un artículo', () => {
      const user = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.subscribe(user);
      newsCategory.publish('Nuevo artículo');
      expect(user.update).toHaveBeenCalledWith('Nuevo artículo');
    });

    test('no debe notificar a usuarios no registrados', () => {
      const user = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.publish('Nuevo artículo');
      expect(user.update).not.toHaveBeenCalled();
    });
  });

  describe('2. Notificaciones eficientes', () => {
    test('debe notificar a múltiples usuarios registrados', () => {
      const user1 = { update: jest.fn() };
      const user2 = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.subscribe(user1);
      newsCategory.subscribe(user2);
      newsCategory.publish('Nuevo artículo');
      expect(user1.update).toHaveBeenCalledTimes(1);
      expect(user2.update).toHaveBeenCalledTimes(1);
    });

    test('no debe notificar a usuarios desuscritos', () => {
      const user = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.subscribe(user);
      newsCategory.unsubscribe(user);
      newsCategory.publish('Nuevo artículo');
      expect(user.update).not.toHaveBeenCalled();
    });
  });

  describe('3. Eficiencia de recursos', () => {
    test('no debe mantener referencias a usuarios desuscritos', () => {
      const user = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.subscribe(user);
      newsCategory.unsubscribe(user);
      // Verificar que el usuario ya no está en la lista de observadores
      // (Asumiendo que existe una forma de obtener la lista, como getObservers())
      // Si no hay acceso a la lista, probar mediante comportamiento
      newsCategory.publish('Otro artículo');
      expect(user.update).not.toHaveBeenCalled();
    });

    test('debe manejar múltiples suscripciones/desuscripciones sin fugas', () => {
      const user = { update: jest.fn() };
      const newsCategory = new NewsCategory();
      newsCategory.subscribe(user);
      newsCategory.unsubscribe(user);
      newsCategory.subscribe(user);
      newsCategory.publish('Artículo final');
      expect(user.update).toHaveBeenCalledTimes(1);
    });
  });
});