//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.1.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.2.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/claude/example1.3.js';

//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/deepseek.r1/example1.1.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/deepseek.r1/example1.2.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/deepseek.r1/example1.3.js';

//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.1.js';
// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.2.js';
// import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gemini-2.0/example1.3.js'; 

//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.1.js';
//import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.2.js';
import {ArticleFactory, NewsArticle, OpinionArticle, ReportArticle, ArticleCard} from '../../src/factoryMethod/case-1/gpt-4o1-p/example1.3.js'; 


describe('ArticleFactory', () => {
  // Test 1: Desacoplamiento entre creación y uso.
  test('1. The client uses the common render() interface without relying on the concrete class', () => {
    const dataNews = {
      title: "News Title",
      content: "Esta es una noticia de ejemplo"
    };
    const newsArticle = ArticleFactory.createArticle("news", dataNews);

    // Verificamos que el método render() exista
    expect(typeof newsArticle.render).toBe("function");

    // El cliente utiliza render() para obtener la salida
    const renderedOutput = newsArticle.render();

    // Verificamos que la salida contenga los datos proporcionados
    expect(renderedOutput).toContain("News Title");
    expect(renderedOutput).toContain("Esta es una noticia de ejemplo");
  });

  // Test 2: Tipo correcto de producto devuelto.
  test('2. Should return the correct type of article based on input', () => {
    const newsArticle = ArticleFactory.createArticle('news', {});
    const opinionArticle = ArticleFactory.createArticle('opinion', {});
    const reportArticle = ArticleFactory.createArticle('report', {});

    // Verificamos que se devuelven instancias del tipo correcto
    expect(newsArticle).toBeInstanceOf(NewsArticle);
    expect(opinionArticle).toBeInstanceOf(OpinionArticle);
    expect(reportArticle).toBeInstanceOf(ReportArticle);

    // Verificamos que no se mezclen tipos incorrectos
    expect(newsArticle).not.toBeInstanceOf(OpinionArticle);
    expect(newsArticle).not.toBeInstanceOf(ReportArticle);
    expect(opinionArticle).not.toBeInstanceOf(NewsArticle);
    expect(opinionArticle).not.toBeInstanceOf(ReportArticle);
    expect(reportArticle).not.toBeInstanceOf(NewsArticle);
    expect(reportArticle).not.toBeInstanceOf(OpinionArticle);

    // Verificamos manejo de tipos no reconocidos
    expect(() => {
      ArticleFactory.createArticle('undefined-type', {});
    }).toThrow();
  });

  // Test 3: Cumplimiento del DIP (Principio de Inversión de Dependencias).
  test('3. The articles created comply with the DIP by extending the abstract class ArticleCard.', () => {
    const articleTypes = [
      { 
        type: "news", 
        data: {
          title: "News Title",
          content: "Contenido de noticia"
        }
      },
      {
        type: "opinion", 
        data: {
          title: "Opinion Piece",
          content: "Contenido de opinión"
        }
      },
      {
        type: "report", 
        data: {
          title: "Report Headline",
          content: "Contenido de reporte"
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
