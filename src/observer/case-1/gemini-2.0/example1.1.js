//1
// main.js
import { NewsCategory, User } from './newsCategory.js';

// Crear categorías de noticias
const sportsCategory = new NewsCategory('Sports');
const politicsCategory = new NewsCategory('Politics');

// Crear usuarios
const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Charlie');

// Suscribir usuarios a categorías
sportsCategory.subscribe(user1);
sportsCategory.subscribe(user2);
politicsCategory.subscribe(user3);
politicsCategory.subscribe(user1);

// Publicar artículos
sportsCategory.publish('Equipo local gana el campeonato');
politicsCategory.publish('Nueva ley aprobada');

// Desuscribir un usuario
sportsCategory.unsubscribe(user2);

// Publicar otro artículo
sportsCategory.publish('Escandalo en el equipo');
