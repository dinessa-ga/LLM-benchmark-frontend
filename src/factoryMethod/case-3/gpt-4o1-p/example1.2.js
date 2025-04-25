// 2
class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    return `<div>Perfil base</div>`;
  }
}

class StandardProfile extends UserProfileCard {
  render() {
    return `<div>Perfil estándar: ${this.data.nombre}</div>`;
  }
}

class CreatorProfile extends UserProfileCard {
  render() {
    return `<div>Perfil creador: ${this.data.nombre}</div>`;
  }
}

class ModeratorProfile extends UserProfileCard {
  render() {
    return `<div>Perfil moderador: ${this.data.nombre}</div>`;
  }
}

class UserProfileFactory {
  static createProfile(type, data) {
    switch (type) {
      case "standard":
        return new StandardProfile(data);
      case "creator":
        return new CreatorProfile(data);
      case "moderator":
        return new ModeratorProfile(data);
      default:
        return new UserProfileCard(data);
    }
  }
}

export {
  UserProfileCard,
  StandardProfile,
  CreatorProfile,
  ModeratorProfile,
  UserProfileFactory
};