const { CardFactory, ArticleCard } = require('../code-project/case-1/claude-3.5/example1.1.js');


test('Debe usar la fábrica para crear una instancia (No separa la lógica de creación de objetos)', () => {
  const factory = new CardFactory();

  // Creación correcta a través de la fábrica
  const card = factory.createCard('article', { title: 'Test', date: '2025-03-14', summary: 'Resumen de prueba' });
  expect(card).toBeInstanceOf(ArticleCard);

  // Creación incorrecta mediante "new"
  expect(() => new ArticleCard({ title: 'Error Test' })).toThrow(
    'No separa la lógica de creación de objetos: El cliente usa "new" directamente'
  );
});

// Manejo de errores en la creación de objetos

test("Lanza un error para input no válido", () => {
  class Factory {
    createProduct(type) {
      if (type !== "A" && type !== "B") {
        throw new Error("Tipo no válido");
      }
      return { type };
    }
  }
  const factory = new Factory();

  expect(() => factory.createProduct("C")).toThrow("Tipo no válido");
});


//Tipo correcto de producto devuelto según el input recibido
test("Retorna el tipo correcto según el input", () => {
  class ProductA {}
  class ProductB {}
  class Factory {
    createProduct(type) {
      if (type === "A") return new ProductA();
      if (type === "B") return new ProductB();
    }
  }
  const factory = new Factory();
  const productA = factory.createProduct("A");
  const productB = factory.createProduct("B");

  expect(productA).toBeInstanceOf(ProductA);
  expect(productB).toBeInstanceOf(ProductB);
});
