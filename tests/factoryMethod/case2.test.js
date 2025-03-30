
import { ArticleFactory } from '.../src/case-2/deepseek.r1/example1.3.js';

describe('ArticleFactory', () => {
  // Test para verificar que el método createArticle existe
  test('should have a static method named createArticle', () => {
    expect(ArticleFactory.createArticle).toBeDefined();
    expect(typeof ArticleFactory.createArticle).toBe('function');
  })

});