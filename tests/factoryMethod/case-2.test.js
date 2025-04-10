import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/claude/example1.1.js';
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
// import {ProductFactory, StandardProduct, DiscountProduct, ExclusiveProduct, ProductCard} from '../../src/factoryMethod/case-2/gpt-4o1-p/example1.3.js'; 


describe('ProductFactory.createProductCard', () => {
  test('Permite usar render() sin conocer la clase concreta', () => {
    const product = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    expect(typeof product.render).toBe('function');
  });

  test('Devuelve StandardProduct, DiscountProduct o ExclusiveProduct según el tipo', () => {
    const standardProduct = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    const discountProduct = ProductFactory.createProductCard('discount', { name: 'Producto con descuento' });
    const exclusiveProduct = ProductFactory.createProductCard('exclusive', { name: 'Producto exclusivo' });

    expect(standardProduct).toBeInstanceOf(StandardProduct);
    expect(discountProduct).toBeInstanceOf(DiscountProduct);
    expect(exclusiveProduct).toBeInstanceOf(ExclusiveProduct);
  });

  test('Cada producto devuelto sea instancia de ProductCard', () => {
    const standardProduct = ProductFactory.createProductCard('standard', { name: 'Producto estándar' });
    const discountProduct = ProductFactory.createProductCard('discount', { name: 'Producto con descuento' });
    const exclusiveProduct = ProductFactory.createProductCard('exclusive', { name: 'Producto exclusivo' });

    expect(standardProduct).toBeInstanceOf(ProductCard);
    expect(discountProduct).toBeInstanceOf(ProductCard);
    expect(exclusiveProduct).toBeInstanceOf(ProductCard);
  });
});