//Solo se usan cuando es modele.exports
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card } = require('../src/case-1/claude-3.5/example1.1.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/claude-3.5/example1.2.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card } = require('../code-project/case-1/claude-3.5/example1.3.js');

//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/deepseek.r1/example1.1.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/deepseek.r1/example1.2.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../code-project/case-1/deepseek.r1/example1.3.js');

//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.1.js'); 
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.2.js'); 
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.3.js');

//const { createCard, Card, ArticleCard, ProductCard, ProfileCard } = require('../src/case-1/gpt-4o1-preview/example1.1.js');
//const { createCard, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gpt-4o1-preview/example1.2.js');
// const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gpt-4o1-preview/example1.3.js');


//import { createCard, Card, ArticleCard, ProductCard, ProfileCard } from '../src/case-1/gpt-4o1-preview/example1.1.js';

//import { createCard, Card, ArticleCard, ProductCard, ProfileCard } from '../src/case-1/gpt-4o1-preview/example1.1.js';

describe('Factory Method (createCard)', () => {
  // Helper function to generate dynamic test data
  function generateTestData(type) {
    switch (type) {
      case 'article':
        return { title: `Test Article ${Math.random()}`, content: 'Dynamic content.' };
      case 'product':
        return { name: `Test Product ${Math.random()}`, price: Math.random() * 100 };
      case 'profile':
        return { username: `testuser${Math.random()}`, bio: 'Dynamic profile.' };
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  // 1. Desacoplamiento entre creación y uso
  it('Debe crear instancias de Card a través de la función de fábrica, desacoplando la creación del uso', () => {
    const article = createCard('article', generateTestData('article'));
    const product = createCard('product', generateTestData('product'));
    const profile = createCard('profile', generateTestData('profile'));

    expect(article).toBeInstanceOf(Card);
    expect(product).toBeInstanceOf(Card);
    expect(profile).toBeInstanceOf(Card);
  });

  // 2. Tipo correcto de producto devuelto
  it('Debe retornar el tipo correcto de producto según el input especificado', () => {
    expect(createCard('article', generateTestData('article'))).toBeInstanceOf(ArticleCard);
    expect(createCard('product', generateTestData('product'))).toBeInstanceOf(ProductCard);
    expect(createCard('profile', generateTestData('profile'))).toBeInstanceOf(ProfileCard);
  });

  // 3. Cumplimiento de DIP (Principio de Inversión de Dependencias) / Retorno de Abstracciones
  it('La función de fábrica debe retornar abstracciones (instancias de la clase base Card)', () => {
    expect(createCard('article', generateTestData('article'))).toBeInstanceOf(Card);
    expect(createCard('product', generateTestData('product'))).toBeInstanceOf(Card);
    expect(createCard('profile', generateTestData('profile'))).toBeInstanceOf(Card);
  });
});