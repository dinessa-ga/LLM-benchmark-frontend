//para export default sin llaves
//import  ArticleFactory from '../../src/case-2/deepseek.r1/example1.1.js';
import { ArticleFactory, NewsArticle, OpinionArticle, ReportArticle} from '../../src/case-2/deepseek.r1/example1.1.js';

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

/* Opcional: Verificar la extensión sin modificar la fábrica existente (cumple con el OCP y refuerza el DIP)
     Suponiendo que ArticleFactory permita el registro de nuevos tipos mediante un método registerArticleType,
     este test demuestra que se puede extender la fábrica sin que los clientes deban cambiar su código. */
     if (typeof ArticleFactory.registerArticleType === 'function') {
      test('should allow the registration of new article types without modifying existing client code', () => {
        class BlogArticle {
          constructor(config) {
            this.config = config;
          }
          getInfo() {
            return `Blog: ${this.config.title}`;
          }
        }
  
        // Se registra el nuevo tipo de artículo
        ArticleFactory.registerArticleType('blog', BlogArticle);
  
        const blogArticle = ArticleFactory.createArticle('blog', { title: 'My Blog Post' });
        expect(blogArticle).toBeInstanceOf(BlogArticle);
        expect(blogArticle.getInfo()).toBe('Blog: My Blog Post');
      });
    }

});