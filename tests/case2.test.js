//Case 2

// const { articleFactory } = require('../src/case-2/deepseek.r1/example1.1.js');
// const { articleCard, newsArticle } = require('../src/case-2/deepseek.r1/example1.1.js');

// const { articleFactory } = require('../src/case-2/deepseek.r1/example1.2.js');
// const { articleCard, newsArticle } = require('../src/case-2/deepseek.r1/example1.2.js');

//const { articleFactory, articleCard, newsArticle } = require( '../src/case-2/deepseek.r1/example1.3.js');



describe('articleFactory', () => {

  // 1. Test de Desacoplamiento entre creación y uso (Opción 1: Eliminado)
  test('debería crear una instancia de articleCard (abstracción)', () => {
    const newsData = { headline: 'Noticia', location: 'Ubicación' };
    const newsArticle = articleFactory.createArticle('news', newsData);
    expect(newsArticle).toBeInstanceOf(articleCard); // Incorrecto, la fábrica no crea articleCard directamente
  });

  // 2. Test de Tipo correcto de producto devuelto
  test('debería devolver una instancia de newsArticle para el tipo "news"', () => {
    const data = { headline: 'Noticia', location: 'Ubicación' };
    const article = articleFactory.createArticle('news', data);
    expect(article).toBeInstanceOf(newsArticle);
  });


  // 3. Test de Cumplimiento de DIP (Principio de Inversión de Dependencias)
  test('los objetos creados deberían tener el método display definido en la abstracción', () => {
    const newsData = { headline: 'Noticia', location: 'Ubicación' };
    const newsArticle = articleFactory.createArticle('news', newsData);
    expect(typeof newsArticle.display).toBe('function');

  });

  //El útlimo código en Deepseek R1 agregó render() a la abstracción, por lo que el test debería ser:
  //3. Test de Cumplimiento de DIP (Principio de Inversión de Dependencias)
    test('los objetos creados deberían tener el método render definido en la abstracción', () => {
      const newsData = { title: 'Noticia', author: 'Autor', content: 'Contenido', source: 'Fuente' };
      const newsArticle = articleFactory.createArticle('news', newsData);
      expect(typeof newsArticle.render).toBe('function');
    });

});

