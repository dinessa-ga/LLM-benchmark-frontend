//para export default sin llaves
//import  ArticleFactory from '../../src/case-2/deepseek.r1/example1.1.js';
import { ArticleFactory, NewsArticle, OpinionArticle, ReportArticle} from '../../src/case-2/deepseek.r1/example1.1.js';

// __tests__/ArticleFactory.test.js

// import ArticleFactory from '../ArticleFactory';
// import { NewsArticle } from '../ArticleCard'; // Import para verificar instanceof
// import { OpinionArticle } from '../ArticleCard'; // Import para verificar instanceof
// import { ReportArticle } from '../ArticleCard'; // Import para verificar instanceof

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
});