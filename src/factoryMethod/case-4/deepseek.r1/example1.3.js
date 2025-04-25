//3
// Clase base abstracta
export class CourseCard {
  constructor(data) {
    if (new.target === CourseCard) {
      throw new Error('CourseCard no puede ser instanciada directamente');
    }
    this.data = data;
  }

  render() {
    throw new Error('Método render() debe ser implementado');
  }
}

// Clases concretas
export class FreeCourse extends CourseCard {
  render() {
    return `
      <div class="course free">
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <span class="price-tag">¡GRATIS!</span>
        <button class="enroll">Inscribirse</button>
      </div>
    `;
  }
}

export class PremiumCourse extends CourseCard {
  render() {
    return `
      <div class="course premium">
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <div class="pricing">
          <span class="price">$${this.data.price}</span>
          <span class="duration">/${this.data.duration} meses</span>
        </div>
        <button class="buy">Comprar curso</button>
      </div>
    `;
  }
}

export class PromoCourse extends CourseCard {
  render() {
    const discountPrice = this.data.price * (1 - this.data.discount / 100);
    return `
      <div class="course promo">
        <div class="discount-badge">-${this.data.discount}%</div>
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <div class="pricing">
          <span class="original-price">$${this.data.price}</span>
          <span class="discount-price">$${discountPrice.toFixed(2)}</span>
        </div>
        <button class="buy-promo">Obtener oferta</button>
      </div>
    `;
  }
}

// Factory Method
export class CourseFactory {
  static createCourseCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    const creators = {
      free: () => new FreeCourse(data),
      premium: () => new PremiumCourse(data),
      promo: () => new PromoCourse(data)
    };

    if (!creators[normalizedType]) {
      throw new Error(`Tipo de curso no válido: ${type}`);
    }

    return creators[normalizedType]();
  }
}