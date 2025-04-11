//import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/claude/example1.1.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/claude/example1.2.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/claude/example1.3.js';

// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/deepseek.r1/example1.1.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/deepseek.r1/example1.2.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/deepseek.r1/example1.3.js';

// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gemini-2.0/example1.1.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gemini-2.0/example1.2.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gemini-2.0/example1.3.js'; 

// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gpt-4o1-p/example1.1.js';
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gpt-4o1-p/example1.2.js';
import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gpt-4o1-p/example1.3.js'; 

describe('ProductFactory.createProductCard', () => {
  // Criterio 1: Validar desacoplamiento entre creación y uso
  test('Permite usar render() sin conocer la clase concreta', () => {
    const product = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    
    // La prueba asegura que el método render() puede ser utilizado sin importar la clase concreta del producto.
    expect(typeof product.render).toBe('function');
  });

  // Criterio 2: Validar que devuelve el tipo correcto de producto
  test('Devuelve StandardProduct, DiscountProduct o ExclusiveProduct según el tipo', () => {
    const standardProduct = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    const discountProduct = ProductFactory.createProductCard('discount', { name: 'Producto con descuento' });
    const exclusiveProduct = ProductFactory.createProductCard('exclusive', { name: 'Producto exclusivo' });

    // Se verifica que el tipo devuelto coincida con el tipo especificado en la fábrica.
    expect(standardProduct).toBeInstanceOf(StandardProduct);
    expect(discountProduct).toBeInstanceOf(DiscountProduct);
    expect(exclusiveProduct).toBeInstanceOf(ExclusiveProduct);
  });

  // Criterio 3: Validar cumplimiento del Principio de Inversión de Dependencias (DIP)
  test('Cada producto devuelto sea instancia de ProductCard', () => {
    const standardProduct = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    const discountProduct = ProductFactory.createProductCard('discount', { name: 'Producto con descuento' });
    const exclusiveProduct = ProductFactory.createProductCard('exclusive', { name: 'Producto exclusivo' });

    // Cada producto debe ser una instancia de la clase base ProductCard, lo que indica adherencia al DIP.
    expect(standardProduct).toBeInstanceOf(ProductCard);
    expect(discountProduct).toBeInstanceOf(ProductCard);
    expect(exclusiveProduct).toBeInstanceOf(ProductCard);
  });
});
