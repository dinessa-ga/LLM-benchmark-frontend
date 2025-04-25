// 2
// Clase Base Abstracta
export class CourseCard {
  constructor(data) {
    if (new.target === CourseCard) {
      throw new Error("CourseCard es una clase abstracta y no puede ser instanciada directamente");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado por las subclases");
  }
}

// Cursos Gratuitos
export class FreeCourse extends CourseCard {
  render() {
    return `
      <article class="course free-course">
        <h3>${this.data.title}</h3>
        <p>${this.data.description}</p>
        <div class="badge-free">Gratis</div>
        <button class="enroll">Inscribirse</button>
      </article>
    `;
  }
}

// Cursos Premium
export class PremiumCourse extends CourseCard {
  render() {
    return `
      <article class="course premium-course">
        <h3>${this.data.title}</h3>
        <p>${this.data.description}</p>
        <div class="price-tag">$${this.data.price.toFixed(2)}</div>
        <div class="premium-features">
          <span>Certificado</span>
          <span>Soporte prioritario</span>
        </div>
        <button class="buy">Comprar ahora</button>
      </article>
    `;
  }
}

// Cursos en Promoción
export class PromoCourse extends CourseCard {
  render() {
    const discountPrice = this.data.originalPrice * (1 - this.data.discount / 100);
    
    return `
      <article class="course promo-course">
        <div class="discount-banner">-${this.data.discount}%</div>
        <h3>${this.data.title}</h3>
        <p>${this.data.description}</p>
        <div class="price-container">
          <span class="original-price">$${this.data.originalPrice.toFixed(2)}</span>
          <span class="discount-price">$${discountPrice.toFixed(2)}</span>
        </div>
        <button class="buy-promo">Aprovechar oferta</button>
      </article>
    `;
  }
}

// Factory Method
export class CourseFactory {
  static createCourseCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    const courseMap = {
      free: FreeCourse,
      premium: PremiumCourse,
      promo: PromoCourse
    };

    const CourseClass = courseMap[normalizedType];
    
    if (!CourseClass) {
      throw new Error(`Tipo de curso no soportado: ${type}`);
    }
    
    return new CourseClass(data);
  }
}
