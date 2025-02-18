
// GTP 4o

class UserView {
  constructor() {
    if (UserView.instance) {
      return UserView.instance;
    }
    this.user = {
      firstName: '',
      lastName: ''
    };
    UserView.instance = this;
  }

  setUser(firstName, lastName) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
  }

  getUser() {
    return this.user;
  }

  render() {
    console.log(`Nombre: ${this.user.firstName}, Apellido: ${this.user.lastName}`);
  }
}

// Uso del patrón Singleton
const userView1 = new UserView();
userView1.setUser('Juan', 'Pérez');
userView1.render(); // Output: Nombre: Juan, Apellido: Pérez

const userView2 = new UserView();
userView2.render(); // Output: Nombre: Juan, Apellido: Pérez

console.log(userView1 === userView2); // Output: true

// 