//1
// user.js
export class User {
  constructor(name) {
    this.name = name;
  }

  update(content) {
    console.log(`${this.name} received update: ${content}`);
  }
}


// collaborative-document.js
export class CollaborativeDocument {
  constructor() {
    this.observers = [];
    this.content = "";
  }

  subscribe(user) {
    this.observers.push(user);
    console.log(`${user.name} subscribed to the document.`);
  }

  unsubscribe(user) {
    this.observers = this.observers.filter(observer => observer !== user);
    console.log(`${user.name} unsubscribed from the document.`);
  }


  edit(content) {
    this.content = content;
    console.log(`Document content updated to: ${this.content}`);
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.content);
    });
  }
}



// main.js (Ejemplo de uso - NO INCLUIDO EN LA EXPORTACION PERO MUESTRA COMO USAR LAS CLASES)
// Asegúrate de que tu entorno soporta ES Modules (Node.js necesita un package.json con "type": "module")
/*
import { User } from './user.js';
import { CollaborativeDocument } from './collaborative-document.js';

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

const document = new CollaborativeDocument();

document.subscribe(user1);
document.subscribe(user2);

document.edit("Initial content.");

document.unsubscribe(user2);

document.edit("Updated content after Bob unsubscribed.");

document.subscribe(user3);

document.edit("Content with charlie");
*/


// Se exporta todo desde collaborative-document.js y user.js
// Aunque no es necesario en este caso (ya que se importan directamente),
// se incluye por completitud si quieres agrupar las exportaciones.
export * from './collaborative-document.js';
export * from './user.js';

