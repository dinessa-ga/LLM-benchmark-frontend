import {} from '../../src/observer/case-4/claude/example1.1.js';
import {} from '../../src/observer/case-4/claude/example1.2.js';
import {} from '../../src/observer/case-4/claude/example1.3.js';

import {} from '../../src/observer/case-4/deepseek.r1/example1.1.js';
import {} from '../../src/observer/case-4/deepseek.r1/example1.2.js';
import {} from '../../src/observer/case-4/deepseek.r1/example1.3.js';

import {} from '../../src/observer/case-4/gemini-2.0/example1.1.js';
import {} from '../../src/observer/case-4/gemini-2.0/example1.2.js';
import {} from '../../src/observer/case-4/gemini-2.0/example1.3.js'; 

import {} from '../../src/observer/case-4/gpt-4o1-p/example1.1.js';
import {} from '../../src/observer/case-4/gpt-4o1-p/example1.2.js';
import {StoreProduct} from '../../src/observer/case-4/gpt-4o1-p/example1.3.js'; 

// Pruebas para la clase StoreProduct

describe('StoreProduct', () => {
  let storeProduct;

  beforeEach(() => {
    // Se crea una nueva instancia de StoreProduct antes de cada prueba
    storeProduct = new StoreProduct();
  });

  // Criterio 1: Registro dinámico de observadores
  describe('Registro dinámico de usuarios interesados', () => {
    test('Se pueden agregar usuarios interesados en tiempo real con subscribe', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Agregar el usuario al producto
      storeProduct.subscribe(user);

      // Assert: Verificar que el usuario fue agregado correctamente
      expect(storeProduct.subscribers).toContain(user);
    });

    test('No se permite agregar el mismo usuario más de una vez', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Intentar agregar el mismo usuario dos veces
      storeProduct.subscribe(user);
      storeProduct.subscribe(user);

      // Assert: Verificar que el usuario solo fue agregado una vez
      expect(storeProduct.subscribers.length).toBe(1);
    });
  });

  // Criterio 2: Notificaciones eficientes
  describe('Notificaciones eficientes', () => {
    test('Los usuarios deben recibir una notificación solo cuando el stock es mayor a 0', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Agregar el usuario y actualizar el stock a un valor mayor que 0
      storeProduct.subscribe(user);
      storeProduct.updateStock(5); // Stock > 0

      // Assert: Verificar que el usuario recibió la notificación
      expect(user).toHaveBeenCalledWith('Hay stock disponible: 5 unidades');
    });

    test('Los usuarios no deben recibir notificaciones si el stock es 0 o menor', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Agregar el usuario y actualizar el stock a un valor menor o igual a 0
      storeProduct.subscribe(user);
      storeProduct.updateStock(0); // Stock <= 0

      // Assert: Verificar que el usuario no recibió ninguna notificación
      expect(user).not.toHaveBeenCalled();
    });
  });

  // Criterio 3: Eficiencia de recursos
  describe('Eficiencia de recursos', () => {
    test('Los usuarios eliminados no deben recibir alertas', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Agregar el usuario, eliminarlo y luego actualizar el stock
      storeProduct.subscribe(user);
      storeProduct.unsubscribe(user);
      storeProduct.updateStock(10); // Stock > 0

      // Assert: Verificar que el usuario no recibió ninguna notificación después de ser eliminado
      expect(user).not.toHaveBeenCalled();
    });

    test('Las notificaciones deben ser enviadas solo a los usuarios activos', () => {
      // Arrange: Crear dos usuarios simulados
      const user1 = jest.fn();
      const user2 = jest.fn();

      // Act: Agregar ambos usuarios, eliminar uno y actualizar el stock
      storeProduct.subscribe(user1);
      storeProduct.subscribe(user2);
      storeProduct.unsubscribe(user2);
      storeProduct.updateStock(8); // Stock > 0

      // Assert: Verificar que solo el usuario activo recibió la notificación
      expect(user1).toHaveBeenCalledWith('Hay stock disponible: 8 unidades');
      expect(user2).not.toHaveBeenCalled();
    });

    test('Las notificaciones deben ser enviadas exactamente una vez por actualización de stock', () => {
      // Arrange: Crear un usuario simulado
      const user = jest.fn();

      // Act: Agregar el usuario y actualizar el stock dos veces
      storeProduct.subscribe(user);
      storeProduct.updateStock(3); // Primera actualización
      storeProduct.updateStock(7); // Segunda actualización

      // Assert: Verificar que el usuario recibió exactamente dos notificaciones
      expect(user).toHaveBeenCalledTimes(2);
    });
  });
});