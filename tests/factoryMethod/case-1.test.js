//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.1.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.2.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.3.js';

// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/case-2/deepseek.r1/example1.1.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/case-2/deepseek.r1/example1.2.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/deepseek.r1/example1.3.js';

// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.1.js';
// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.2.js';
// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.3.js'; 

// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.1.js';
// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.2.js';
import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.3.js'; 



describe('ArticleFactory', () => {
  test('should create a NewsArticle instance', () => {
    const article = ArticleFactory.createArticle('news', {});
    expect(article).toBeInstanceOf(NewsArticle);
  });

  test('should return different concrete classes based on the type', () => {
    const newsArticle = ArticleFactory.createArticle('news', {});
    const opinionArticle = ArticleFactory.createArticle('opinion', {});
    const reportArticle = ArticleFactory.createArticle('report', {});

    expect(newsArticle).toBeInstanceOf(NewsArticle);
    expect(opinionArticle).toBeInstanceOf(OpinionArticle);
    expect(reportArticle).toBeInstanceOf(ReportArticle);
    expect(newsArticle).not.toBeInstanceOf(OpinionArticle);
    expect(newsArticle).not.toBeInstanceOf(ReportArticle);
    expect(opinionArticle).not.toBeInstanceOf(NewsArticle);
    expect(opinionArticle).not.toBeInstanceOf(ReportArticle);
    expect(reportArticle).not.toBeInstanceOf(NewsArticle);
    expect(reportArticle).not.toBeInstanceOf(OpinionArticle);
  });

 // Caso 1: Desacoplamiento entre creación y uso.
  // Aquí el cliente utiliza el método común "render()" para obtener la salida HTML sin conocer la implementación interna.
  test('1. The client uses the common render() interface without relying on the concrete class', () => {
    const dataNews = {
      title: "News Title",
      author: "News Author",
      publishDate: new Date("2025-03-30"),
      excerpt: "Esta es una noticia de ejemplo",
      featuredImage: "http://example.com/image.jpg"
    };

    const newsArticle = ArticleFactory.createArticle("news", dataNews);

    // Verificamos que el método render() exista
    expect(typeof newsArticle.render).toBe("function");

    // El cliente utiliza render() para obtener la salida (sin conocer la implementación interna)
    const renderedOutput = newsArticle.render();

    // Verificamos que la salida contenga algunos de los datos proporcionados (indicativo de desacoplamiento)
    expect(renderedOutput).toContain("News Title");
    expect(renderedOutput).toContain("news-card");
  });


  /* Caso 2: Tipo correcto de producto devuelto
     Aunque el test anterior “should return different concrete classes based on the type”
     ya verifica la creación de instancias correctas, se añade un caso para tipos no reconocidos.
     Esto ayuda a reforzar que la fábrica devuelve el producto correcto o arroja un error 
     en caso de que se solicite un tipo no soportado. */
  test('2. Should throw an error or return null for an unrecognized article type', () => {
    expect(() => {
      ArticleFactory.createArticle('undefined-type', {});
    }).toThrow();
  });

  // Caso 3: Cumplimiento del DIP (Principio de Inversión de Dependencias).
  // Se valida que todos los artículos creados extiendan de la clase abstracta ArticleCard
  // y que expongan la misma interfaz (en este caso, al menos el método render()).
  test('3. The articles created comply with the DIP by extending the abstract class ArticleCard.', () => {
    const articleTypes = [
      { 
        type: "news", 
        data: {
          title: "News Title",
          author: "News Author",
          publishDate: new Date("2025-03-30"),
          excerpt: "Esta es una noticia de ejemplo",
          featuredImage: "http://example.com/image.jpg"
        }
      },
      {
        type: "opinion", 
        data: {
          title: "Opinion Piece",
          author: "Opinion Author",
          authorImage: "http://example.com/avatar.jpg",
          authorBio: "Breve biografía",
          content: "Contenido de opinión",
          rating: 4
        }
      },
      {
        type: "report", 
        data: {
          headline: "Report Headline",
          category: "Business",
          pages: 10,
          readingTime: 5,
          sections: [
            {
              title: "Sección 1",
              content: "Contenido de la sección",
              chart: "Datos del gráfico"
            }
          ]
        }
      }
    ];

    articleTypes.forEach(({ type, data }) => {
      const article = ArticleFactory.createArticle(type, data);

      // Verificamos que cada artículo extienda de ArticleCard (cumpliendo con DIP)
      expect(article).toBeInstanceOf(ArticleCard);

      // Comprobamos que la interfaz común (método render()) está implementada
      expect(typeof article.render).toBe("function");
    });
  });


  
});