// import {Product} from '../../src/observer/case-2/claude/example1.1.js';
// import {Product} from '../../src/observer/case-2/claude/example1.2.js';
//import {Product} from '../../src/observer/case-2/claude/example1.3.js';

//import {Product} from '../../src/observer/case-2/deepseek.r1/example1.1.js';
// import {Product} from '../../src/observer/case-2/deepseek.r1/example1.2.js';
// import {Product} from '../../src/observer/case-2/deepseek.r1/example1.3.js';

// import {Product} from '../../src/observer/case-2/gemini-2.0/example1.1.js';
// import {Product} from '../../src/observer/case-2/gemini-2.0/example1.2.js';
// import {Product} from '../../src/observer/case-2/gemini-2.0/example1.3.js'; 

// import {Product} from '../../src/observer/case-2/gpt-4o1-p/example1.1.js';
// import {Product} from '../../src/observer/case-2/gpt-4o1-p/example1.2.js';
// import {Product} from '../../src/observer/case-2/gpt-4o1-p/example1.3.js'; 


describe('Product class unit tests', () => {
  // 1. Registro dinámico de observadores
  describe('1. Registro dinámico de observadores', () => {
    test('Debe permitir registrar múltiples usuarios y notificarlos al cambiar el precio', () => {
      const product = new Product();
      const user1 = { update: jest.fn() };
      const user2 = { update: jest.fn() };

      product.subscribe(user1);
      product.subscribe(user2);
      product.setPrice(100);

      // Verifica que ambos usuarios fueron notificados con el precio correcto
      expect(user1.update).toHaveBeenCalledWith(100);
      expect(user2.update).toHaveBeenCalledWith(100);
      // Asegura que cada usuario fue llamado exactamente una vez
      expect(user1.update).toHaveBeenCalledTimes(1);
      expect(user2.update).toHaveBeenCalledTimes(1);
    });
  });

  // 2. Notificaciones eficientes
  describe('2. Notificaciones eficientes', () => {
    test('Cada usuario registrado debe recibir una sola notificación por cambio de precio', () => {
      const product = new Product();
      const user = { update: jest.fn() };

      product.subscribe(user);
      product.setPrice(150);
      product.setPrice(200);

      // Verifica que el usuario recibe exactamente una notificación por cada cambio
      expect(user.update).toHaveBeenCalledTimes(2);
      expect(user.update).toHaveBeenNthCalledWith(1, 150);
      expect(user.update).toHaveBeenNthCalledWith(2, 200);
    });
  });

  // 3. Eficiencia de recursos
  // describe('3. Eficiencia de recursos', () => {
      test('3. Eficiente de recursos - Usuarios removidos no deben recibir notificaciones', () => {
        const product = new Product();
        const user = { update: jest.fn() };
    
        product.subscribe(user);
        product.unsubscribe(user); // Elimina al usuario
        product.setPrice(250);
    
        // Verifica que el usuario eliminado no recibe la notificación
        expect(user.update).not.toHaveBeenCalled();
      });
});
