//3

class ArticleCard {
  constructor(data) {
    this.data = data;
  }
  render() {
    return `<div class="card article-card">
              <h2>${this.data.title}</h2>
              <p>${this.data.content}</p>
            </div>`;
  }
}

class ProductCard {
  constructor(data) {
    this.data = data;
  }
  render() {
    return `<div class="card product-card">
              <h2>${this.data.name}</h2>
              <p>Price: $${this.data.price}</p>
            </div>`;
  }
}

class ProfileCard {
  constructor(data) {
    this.data = data;
  }
  render() {
    return `<div class="card profile-card">
              <h2>${this.data.username}</h2>
              <p>${this.data.bio}</p>
            </div>`;
  }
}

class CardFactory {
  createCard(type, data) {
    if (type === 'article') return new ArticleCard(data);
    if (type === 'product') return new ProductCard(data);
    if (type === 'profile') return new ProfileCard(data);
    throw new Error('Unknown card type');
  }
}

// Example usage
const factory = new CardFactory();
const articleComponent = factory.createCard('article', {title: 'News', content: 'Latest updates...'});
console.log(articleComponent.render());