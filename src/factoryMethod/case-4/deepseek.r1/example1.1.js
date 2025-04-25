//1
// Clase base abstracta
export class CourseCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Método render debe ser implementado por subclases");
  }
}

// Subclases concretas
export class FreeCourse extends CourseCard {
  render() {
    return `
      <div class="course-card free">
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <div class="badge">FREE</div>
      </div>
    `;
  }
}

export class PremiumCourse extends CourseCard {
  render() {
    return `
      <div class="course-card premium">
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <div class="badge premium">PREMIUM</div>
        <div class="price">$${this.data.price}</div>
      </div>
    `;
  }
}

export class PromoCourse extends CourseCard {
  render() {
    return `
      <div class="course-card promo">
        <h2>${this.data.title}</h2>
        <p>${this.data.description}</p>
        <div class="badge promo">${this.data.discount}% OFF</div>
        <div class="original-price">$${this.data.originalPrice}</div>
      </div>
    `;
  }
}

// Factory
export class CourseFactory {
  static createCourseCard(type, data) {
    switch (type.toLowerCase()) {
      case 'free':
        return new FreeCourse(data);
      case 'premium':
        return new PremiumCourse(data);
      case 'promo':
        return new PromoCourse(data);
      default:
        throw new Error(`Tipo de curso no válido: ${type}`);
    }
  }
}
