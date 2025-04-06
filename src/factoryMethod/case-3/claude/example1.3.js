//3
// Clase base para todos los perfiles de usuario
class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  // Método que deben implementar las clases hijas
  render() {
    throw new Error('El método render() debe ser implementado por las clases hijas');
  }
}

// Perfil estándar para usuarios normales
class StandardProfile extends UserProfileCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="profile-card standard">
        <h2>${this.data.name}</h2>
        <p>Usuario desde: ${this.data.joinDate}</p>
        <p>Bio: ${this.data.bio || 'No hay biografía disponible'}</p>
        <div class="profile-footer">
          <span class="badge">Usuario Estándar</span>
        </div>
      </div>
    `;
  }
}

// Perfil para creadores de contenido
class CreatorProfile extends UserProfileCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="profile-card creator">
        <h2>${this.data.name}</h2>
        <p>Usuario desde: ${this.data.joinDate}</p>
        <p>Bio: ${this.data.bio || 'No hay biografía disponible'}</p>
        <div class="stats">
          <div>Contenido publicado: ${this.data.contentCount || 0}</div>
          <div>Seguidores: ${this.data.followers || 0}</div>
        </div>
        <div class="profile-footer">
          <span class="badge creator-badge">Creador</span>
        </div>
      </div>
    `;
  }
}

// Perfil para moderadores de la plataforma
class ModeratorProfile extends UserProfileCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="profile-card moderator">
        <h2>${this.data.name}</h2>
        <p>Usuario desde: ${this.data.joinDate}</p>
        <p>Bio: ${this.data.bio || 'No hay biografía disponible'}</p>
        <div class="stats">
          <div>Nivel de moderación: ${this.data.moderationLevel || 'Junior'}</div>
          <div>Reportes resueltos: ${this.data.resolvedReports || 0}</div>
        </div>
        <div class="profile-footer">
          <span class="badge moderator-badge">Moderador</span>
        </div>
      </div>
    `;
  }
}

// Factory Method para crear los diferentes tipos de perfiles
class UserProfileFactory {
  static createProfile(type, data) {
    switch (type.toLowerCase()) {
      case 'standard':
        return new StandardProfile(data);
      case 'creator':
        return new CreatorProfile(data);
      case 'moderator':
        return new ModeratorProfile(data);
      default:
        throw new Error(`Tipo de perfil no soportado: ${type}`);
    }
  }
}

// Exportación de todas las clases
export { UserProfileCard, StandardProfile, CreatorProfile, ModeratorProfile, UserProfileFactory };