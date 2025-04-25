// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/claude/example1.1.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/claude/example1.2.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/claude/example1.3.js';

// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/deepseek.r1/example1.1.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/deepseek.r1/example1.2.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/deepseek.r1/example1.3.js';

// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gemini-2.0/example1.1.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gemini-2.0/example1.2.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gemini-2.0/example1.3.js'; 

// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gpt-4o1-p/example1.1.js';
// import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gpt-4o1-p/example1.2.js';
import {CourseFactory, PremiumCourse, PromoCourse, CourseCard} from '../../src/factoryMethod/case-4/gpt-4o1-p/example1.3.js'; 


describe('CourseFactory', () => {
  it('usa el curso de forma desacoplada a su implementación concreta', () => {
    const data = { title: 'Curso Avanzado', duration: '3 meses' };
    
    // Se crea una instancia sin depender de la implementación específica
    const course = CourseFactory.createCourseCard('premium', data);
    
    // Verificamos que el curso puede ser utilizado mediante métodos genéricos
    expect(typeof course.render).toBe('function');
    expect(typeof course.getPrice).toBe('function');
  });

  it('devuelve una instancia de PremiumCourse si el tipo es "premium"', () => {
    const data = { title: 'Curso Premium', price: 100 };
    const course = CourseFactory.createCourseCard('premium', data);
    
    // Verificamos que retorna la clase adecuada según el tipo solicitado
    expect(course).toBeInstanceOf(PremiumCourse);
  });

  it('devuelve una instancia de PromoCourse si el tipo es "promo"', () => {
    const data = { title: 'Curso Promocional', discount: '50%' };
    const course = CourseFactory.createCourseCard('promo', data);
    
    // Se asegura que retorna PromoCourse al seleccionar tipo "promo"
    expect(course).toBeInstanceOf(PromoCourse);
  });

  it('todas las instancias deben heredar de CourseCard', () => {
    const premiumData = { title: 'Curso Exclusivo' };
    const promoData = { title: 'Curso con Oferta' };
    
    const premiumCourse = CourseFactory.createCourseCard('premium', premiumData);
    const promoCourse = CourseFactory.createCourseCard('promo', promoData);
    
    // Confirmamos que las instancias creadas extienden de CourseCard
    expect(premiumCourse).toBeInstanceOf(CourseCard);
    expect(promoCourse).toBeInstanceOf(CourseCard);
  });
});