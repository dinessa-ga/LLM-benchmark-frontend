//Case 2
const {
  ArticleCard,
  NewsArticleCard,
  OpinionArticleCard,
  ArticleCardFactory,
  ReportageArticleCard,
} = require('./ArticleCard');

describe('Pruebas unitarias para ArticleCard y sus clases derivadas', () => {
  describe('Clase base: ArticleCard', () => {
    test('Debe lanzar un error si se llama al método render en la clase base', () => {
      const article = new ArticleCard({ title: 'Test Title', content: 'Test Content' });
      expect(() => article.render()).toThrowError('Método render debe ser implementado');
    });

    test('Debe inicializar correctamente las propiedades title y content', () => {
      const data = { title: 'Test Title', content: 'Test Content' };
      const article = new ArticleCard(data);
      expect(article.title).toBe(data.title);
      expect(article.content).toBe(data.content);
    });
  });

  describe('Clase NewsArticleCard', () => {
    test('Debe inicializar correctamente las propiedades adicionales date y category', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        date: '2024-03-20',
        category: 'Ciencia',
      };
      const newsCard = new NewsArticleCard(data);
      expect(newsCard.title).toBe(data.title);
      expect(newsCard.content).toBe(data.content);
      expect(newsCard.date).toBe(data.date);
      expect(newsCard.category).toBe(data.category);
    });

    test('El método render debe devolver el HTML esperado', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        date: '2024-03-20',
        category: 'Ciencia',
      };
      const newsCard = new NewsArticleCard(data);
      const expectedHTML = `
      <div class="card news">
        <h2>${data.title}</h2>
        <p>${data.content}</p>
        <div class="meta">
          <time>${data.date}</time>
          <span class="category">${data.category}</span>
        </div>
      </div>
    `.trim();
      expect(newsCard.render().trim()).toBe(expectedHTML);
    });
  });

  describe('Clase OpinionArticleCard', () => {
    test('Debe inicializar correctamente la propiedad adicional author', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        author: 'Dra. Pérez',
      };
      const opinionCard = new OpinionArticleCard(data);
      expect(opinionCard.title).toBe(data.title);
      expect(opinionCard.content).toBe(data.content);
      expect(opinionCard.author).toBe(data.author);
    });

    test('El método render debe devolver el HTML esperado', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        author: 'Dra. Pérez',
      };
      const opinionCard = new OpinionArticleCard(data);
      const expectedHTML = `
      <div class="card opinion">
        <h2>${data.title}</h2>
        <p>${data.content}</p>
        <div class="author">✍️ ${data.author}</div>
      </div>
    `.trim();
      expect(opinionCard.render().trim()).toBe(expectedHTML);
    });
  });

  describe('Clase ReportageArticleCard', () => {
    test('Debe inicializar correctamente las propiedades adicionales location y photos', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        location: 'Ciudad Test',
        photos: ['photo1.jpg', 'photo2.jpg'],
      };
      const reportageCard = new ReportageArticleCard(data);
      expect(reportageCard.title).toBe(data.title);
      expect(reportageCard.content).toBe(data.content);
      expect(reportageCard.location).toBe(data.location);
      expect(reportageCard.photos).toEqual(data.photos);
    });

    test('El método render debe devolver el HTML esperado con galería de fotos', () => {
      const data = {
        title: 'Test Title',
        content: 'Test Content',
        location: 'Ciudad Test',
        photos: ['photo1.jpg', 'photo2.jpg'],
      };
      const reportageCard = new ReportageArticleCard(data);
      const expectedHTML = `
      <div class="card reportage">
        <h2>${data.title}</h2>
        <p>${data.content}</p>
        <div class="gallery"><img src="${data.photos[0]"><img src="${data.photos[1]}"></div>
        <div class="location">📍 ${data.location}</div>
      </div>
    `.trim();
      expect(reportageCard.render().trim()).toBe(expectedHTML);
    });
  });

  describe('Clase ArticleCardFactory', () => {
    test('Debe registrar correctamente un nuevo tipo de tarjeta', () => {
      class TestCard extends ArticleCard {
        render() {
          return '<div>Test Card</div';
        }
      }
      ArticleCardFactory.registerType('test', TestCard);
      expect(ArticleCardFactory.types['test']).toBe(TestCard);
    });

    test('Debe crear una instancia del tipo registrado correctamente', () => {
      const data = { title: 'Test Title', content: 'Test Content' };
      const card = ArticleCardFactory.create('news', data);
      expect(card instanceof NewsArticleCard).toBe(true);
      expect(card.title).toBe(data.title);
      expect(card.content).toBe(data.content);
    });

    test('Debe lanzar un error si se intenta crear un tipo no registrado', () => {
      const data = { title: 'Test Title', content: 'Test Content' };
      expect(() => ArticleCardFactory.create('unknown', data)).toThrowError(
        'Tipo no soportado: unknown'
      );
    });
  });
});