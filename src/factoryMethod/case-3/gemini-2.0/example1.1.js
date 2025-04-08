//1
// user-profile.js
class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las clases hijas.");
  }
}

class StandardProfile extends UserProfileCard {
  render() {
    return `
      <div class="standard-profile">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Tipo: Standard</p>
      </div>
    `;
  }
}

class CreatorProfile extends UserProfileCard {
  render() {
    return `
      <div class="creator-profile">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Tipo: Creador</p>
        <p>Bio: ${this.data.bio}</p>
      </div>
    `;
  }
}

class ModeratorProfile extends UserProfileCard {
  render() {
    return `
      <div class="moderator-profile">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Tipo: Moderador</p>
        <p>Permisos: ${this.data.permissions}</p>
      </div>
    `;
  }
}


class UserProfileFactory {
  static createProfile(type, data) {
    switch (type) {
      case 'standard':
        return new StandardProfile(data);
      case 'creator':
        return new CreatorProfile(data);
      case 'moderator':
        return new ModeratorProfile(data);
      default:
        throw new Error(`Tipo de perfil "${type}" desconocido.`);
    }
  }
}

export { UserProfileCard, StandardProfile, CreatorProfile, ModeratorProfile, UserProfileFactory };

