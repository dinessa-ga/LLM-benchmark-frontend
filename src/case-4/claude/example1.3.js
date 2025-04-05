//3
// CourseCard.js - Implementación del patrón Factory Method para tarjetas de cursos

// Clase base abstracta
class CourseCard {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.instructor = data.instructor;
    this.duration = data.duration;
  }

  // Método abstracto que debe ser implementado por las subclases
  render() {
    throw new Error("El método render debe ser implementado por las subclases");
  }
}

// Subclase para cursos gratuitos
class FreeCourse extends CourseCard {
  constructor(data) {
    super(data);
    this.enrollmentLink = data.enrollmentLink;
  }

  render() {
    return `
      <div class="course-card free-course">
        <span class="badge">Gratis</span>
        <h2>${this.title}</h2>
        <p class="description">${this.description}</p>
        <div class="meta">
          <span class="instructor">Instructor: ${this.instructor}</span>
          <span class="duration">Duración: ${this.duration}</span>
        </div>
        <a href="${this.enrollmentLink}" class="enroll-button">Inscribirse Ahora</a>
      </div>
    `;
  }
}

// Subclase para cursos premium
class PremiumCourse extends CourseCard {
  constructor(data) {
    super(data);
    this.price = data.price;
    this.paymentLink = data.paymentLink;
    this.features = data.features || [];
  }

  render() {
    const featuresList = this.features.map(feature => `<li>${feature}</li>`).join('');
    
    return `
      <div class="course-card premium-course">
        <span class="badge premium">Premium</span>
        <h2>${this.title}</h2>
        <p class="description">${this.description}</p>
        <div class="meta">
          <span class="instructor">Instructor: ${this.instructor}</span>
          <span class="duration">Duración: ${this.duration}</span>
        </div>
        <div class="price">${this.price}</div>
        <ul class="features">
          ${featuresList}
        </ul>
        <a href="${this.paymentLink}" class="buy-button">Comprar Ahora</a>
      </div>
    `;
  }
}

// Subclase para cursos promocionales
class PromoCourse extends CourseCard {
  constructor(data) {
    super(data);
    this.originalPrice = data.originalPrice;
    this.discountPrice = data.discountPrice;
    this.promoCode = data.promoCode;
    this.expirationDate = data.expirationDate;
    this.paymentLink = data.paymentLink;
  }

  render() {
    const discountPercentage = Math.round((1 - (this.discountPrice / this.originalPrice)) * 100);
    
    return `
      <div class="course-card promo-course">
        <span class="badge promo">Oferta ${discountPercentage}% OFF</span>
        <h2>${this.title}</h2>
        <p class="description">${this.description}</p>
        <div class="meta">
          <span class="instructor">Instructor: ${this.instructor}</span>
          <span class="duration">Duración: ${this.duration}</span>
        </div>
        <div class="price">
          <span class="original-price">${this.originalPrice}</span>
          <span class="discount-price">${this.discountPrice}</span>
        </div>
        <div class="promo-info">
          <span class="promo-code">Código: ${this.promoCode}</span>
          <span class="expiration">Expira: ${this.expirationDate}</span>
        </div>
        <a href="${this.paymentLink}" class="buy-button">Aprovechar Oferta</a>
      </div>
    `;
  }
}

// Factory Method
class CourseFactory {
  static createCourseCard(type, data) {
    switch (type.toLowerCase()) {
      case 'free':
        return new FreeCourse(data);
      case 'premium':
        return new PremiumCourse(data);
      case 'promo':
        return new PromoCourse(data);
      default:
        throw new Error(`Tipo de curso no soportado: ${type}`);
    }
  }
}

// Exportar todas las clases
export { CourseCard, FreeCourse, PremiumCourse, PromoCourse, CourseFactory };