const { articleFactory, ArticleCard, NewsArticle } = require( '../src/case-2/deepseek.r1/example1.3.js');


describe('articleFactory', () => {

  // 1. Test de Desacoplamiento entre creación y uso
  test('debería crear una instancia de ArticleCard (abstracción)', () => {
    const newsData = { title: 'Noticia', author: 'Autor', content: 'Contenido', source: 'Fuente' };
    const newsArticle = articleFactory.createArticle('news', newsData);
    expect(newsArticle).toBeInstanceOf(ArticleCard);
  });

  // 2. Test de Tipo correcto de producto devuelto
  test('debería devolver una instancia de NewsArticle para el tipo "news"', () => {
    const data = { title: 'Noticia', author: 'Autor', content: 'Contenido', source: 'Fuente' };
    const article = articleFactory.createArticle('news', data);
    expect(article).toBeInstanceOf(NewsArticle);
  });

  // 3. Test de Cumplimiento de DIP (Principio de Inversión de Dependencias)
  test('los objetos creados deberían tener el método render definido en la abstracción', () => {
    const newsData = { title: 'Noticia', author: 'Autor', content: 'Contenido', source: 'Fuente' };
    const newsArticle = articleFactory.createArticle('news', newsData);
    expect(typeof newsArticle.render).toBe('function');
  });
});