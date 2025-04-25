//1
// user.js
class User {
  constructor(name) {
    this.name = name;
  }

  update(article) {
    console.log(`${this.name} received news update: "${article.title}" - ${article.content}`);
  }
}

class NewsCategory {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
    }
  }

  publish(article) {
    if (typeof article !== 'object' || !article.title || !article.content) {
      throw new Error('Published article must be an object with title and content');
    }
    
    this.subscribers.forEach(user => {
      user.update(article);
    });
  }
}

export { User, NewsCategory };

