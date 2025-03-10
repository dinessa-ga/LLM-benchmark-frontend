// Zero-shot CoT

class CardFactory {
  static createCard(tipo, datos) {
    if (tipo === "articulo") return new ArticuloCard(datos);
    if (tipo === "producto") return new ProductoCard(datos);
    if (tipo === "perfil") return new PerfilCard(datos);
    throw new Error("Tipo de card no válido");
  }
}

class ArticuloCard {
  constructor({ titulo, contenido }) {
    this.titulo = titulo;
    this.contenido = contenido;
  }
  render() {
    return `<div class="card articulo">
      <h2>${this.titulo}</h2>
      <p>${this.contenido}</p>
    </div>`;
  }
}

class ProductoCard {
  constructor({ nombre, precio }) {
    this.nombre = nombre;
    this.precio = precio;
  }
  render() {
    return `<div class="card producto">
      <h2>${this.nombre}</h2>
      <p>Precio: ${this.precio}</p>
    </div>`;
  }
}

class PerfilCard {
  constructor({ usuario, bio }) {
    this.usuario = usuario;
    this.bio = bio;
  }
  render() {
    return `<div class="card perfil">
      <h3>${this.usuario}</h3>
      <p>${this.bio}</p>
    </div>`;
  }
}

// Ejemplo de uso
const miCard = CardFactory.createCard("articulo", {
  titulo: "Mi Artículo",
  contenido: "Contenido interesante",
});
console.log(miCard.render());