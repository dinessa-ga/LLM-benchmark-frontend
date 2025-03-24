//Solo se usan cuando es modele.exports
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card } = require('../src/case-1/claude-3.5/example1.1.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/claude-3.5/example1.2.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card } = require('../code-project/case-1/claude-3.5/example1.3.js');

//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/deepseek.r1/example1.1.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/deepseek.r1/example1.2.js');
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../code-project/case-1/deepseek.r1/example1.3.js');

const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.1.js'); 
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.2.js'); 
//const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gemini-2.0/example1.3.js');

//const { createCard, Card, ArticleCard, ProductCard, ProfileCard } = require('../src/case-1/gpt-4o1-preview/example1.1.js');
//const { createCard, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gpt-4o1-preview/example1.2.js');
// const { CardFactory, ArticleCard, ProductCard, ProfileCard, Card} = require('../src/case-1/gpt-4o1-preview/example1.3.js');


//import { createCard, Card, ArticleCard, ProductCard, ProfileCard } from '../src/case-1/gpt-4o1-preview/example1.1.js';

describe('Factory Method (createCard)', () => {
  // 1. Desacoplamiento entre creación y uso
  it('Debe crear instancias de Card a través de la función de fábrica, desacoplando la creación del uso', () => {
    const articleData = { title: 'Test Article', content: 'This is an article.' };
    const productData = { name: 'Test Product', price: 19.99 };
    const profileData = { username: 'testuser1', bio: 'A test profile1.' };

    const article = createCard('article', articleData);
    const product = createCard('product', productData);
    const profile = createCard('profile', profileData);

    expect(article).toBeInstanceOf(Card);
    expect(product).toBeInstanceOf(Card);
    expect(profile).toBeInstanceOf(Card);

    
  });

  // 2. Tipo correcto de producto devuelto
  it('Debe retornar el tipo correcto de producto según el input especificado', () => {
    const articleData = { title: 'Test Article', content: 'This is an article.' };
    const productData = { name: 'Test Product', price: 19.99 };
    const profileData = { username: 'testuser2', bio: 'A test profile2.' };

    expect(createCard('article', articleData)).toBeInstanceOf(ArticleCard);
    expect(createCard('product', productData)).toBeInstanceOf(ProductCard);
    expect(createCard('profile', profileData)).toBeInstanceOf(ProfileCard);
  });

  // 3. Cumplimiento de DIP (Principio de Inversión de Dependencias) / Retorno de Abstracciones
  it('La función de fábrica debe retornar abstracciones (instancias de la clase base Card)', () => {
    const articleData = { title: 'Test Article', content: 'This is an article.' };
    const productData = { name: 'Test Product', price: 19.99 };
    const profileData = { username: 'testuser3', bio: 'A test profile3.' };

    expect(createCard('article', articleData)).toBeInstanceOf(Card);
    expect(createCard('product', productData)).toBeInstanceOf(Card);
    expect(createCard('profile', profileData)).toBeInstanceOf(Card);
  });

 
});