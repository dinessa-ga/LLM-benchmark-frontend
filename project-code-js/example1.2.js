
// GPT 4o1 

class UserView {
  constructor() {
    if (UserView.instance) {
      return UserView.instance;
    }
    this.nombre = '';
    this.apellido = '';
    UserView.instance = this;
  }

  pedirDatosUsuario() {
    this.nombre = prompt('Ingresa tu nombre:');
    this.apellido = prompt('Ingresa tu apellido:');
  }

  mostrarDatosUsuario() {
    alert(`El usuario es: ${this.nombre} ${this.apellido}`);
  }
}

export const vistaUsuario = new UserView();