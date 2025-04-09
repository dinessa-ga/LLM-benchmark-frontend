// 2
// course-factory.js

class CourseCard {
  constructor(title, description, instructor) {
    this.title = title;
    this.description = description;
    this.instructor = instructor;
  }

  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

class FreeCourse extends CourseCard {
  constructor(title, description, instructor) {
    super(title, description, instructor);
    this.price = "Free";
  }

  render() {
    return `
      <div class="course-card free-course">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>Instructor: ${this.instructor}</p>
        <p>Price: ${this.price}</p>
      </div>
    `;
  }
}

class PremiumCourse extends CourseCard {
  constructor(title, description, instructor, price) {
    super(title, description, instructor);
    this.price = price;
  }

  render() {
    return `
      <div class="course-card premium-course">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>Instructor: ${this.instructor}</p>
        <p>Price: $${this.price}</p>
        <button>Enroll Now</button>
      </div>
    `;
  }
}

class PromoCourse extends CourseCard {
  constructor(title, description, instructor, price, discount) {
    super(title, description, instructor);
    this.price = price;
    this.discount = discount;
  }

  render() {
    const discountedPrice = this.price * (1 - this.discount);
    return `
      <div class="course-card promo-course">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>Instructor: ${this.instructor}</p>
        <p>Original Price: <del>$${this.price}</del></p>
        <p>Discounted Price: $${discountedPrice.toFixed(2)} (${this.discount * 100}% off)</p>
        <button>Enroll Now with Discount!</button>
      </div>
    `;
  }
}


const CourseFactory = {
  createCourseCard(type, data) {
    switch (type) {
      case "free":
        return new FreeCourse(data.title, data.description, data.instructor);
      case "premium":
        return new PremiumCourse(data.title, data.description, data.instructor, data.price);
      case "promo":
        return new PromoCourse(data.title, data.description, data.instructor, data.price, data.discount);
      default:
        throw new Error("Invalid course type.");
    }
  },
};


export { CourseCard, FreeCourse, PremiumCourse, PromoCourse, CourseFactory };