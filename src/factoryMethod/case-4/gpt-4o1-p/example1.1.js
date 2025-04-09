//1
// ...existing code...

export class CourseCard {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
  }

  render() {
    return `Course: ${this.title}`;
  }
}

export class FreeCourse extends CourseCard {
  render() {
    return `Free Course: ${this.title}`;
  }
}

export class PremiumCourse extends CourseCard {
  render() {
    return `Premium Course: ${this.title}`;
  }
}

export class PromoCourse extends CourseCard {
  render() {
    return `Promo Course: ${this.title}`;
  }
}

export class CourseFactory {
  static createCourseCard(type, data) {
    switch (type) {
      case 'free':
        return new FreeCourse(data);
      case 'premium':
        return new PremiumCourse(data);
      case 'promo':
        return new PromoCourse(data);
      default:
        throw new Error(`Unknown course type: ${type}`);
    }
  }
}

// ...existing code...