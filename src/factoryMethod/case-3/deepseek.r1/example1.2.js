// 2
// Definición de la clase base UserProfileCard
export class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Método render() debe ser implementado por subclases');
  }
}

// Implementación de perfiles concretos
export class StandardProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile standard">
        <h3>${this.data.username}</h3>
        <p>Rol: Usuario estándar</p>
        <p>Miembro desde: ${this.data.joinDate}</p>
        <p>${this.data.bio || ''}</p>
      </div>
    `;
  }
}

export class CreatorProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile creator">
        <h3>${this.data.username} 👩🎨</h3>
        <p>Rol: Creador de contenido</p>
        <p>Especialidad: ${this.data.specialty}</p>
        <p>Obras publicadas: ${this.data.publicationsCount}</p>
        <div class="badges">${this.data.badges?.join(' • ') || ''}</div>
      </div>
    `;
  }
}

export class ModeratorProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile moderator">
        <h3>${this.data.username} ⚖️</h3>
        <p>Rol: Moderador comunitario</p>
        <p>Secciones a cargo: ${this.data.managedSections.join(', ')}</p>
        <p>Reportes resueltos: ${this.data.resolvedReports}</p>
        <p>Nivel de moderación: ${this.data.modLevel}</p>
      </div>
    `;
  }
}

// Factory Method implementation
export class UserProfileFactory {
  static createProfile(type, data) {
    const normalizedType = type.toLowerCase();
    
    switch(normalizedType) {
      case 'standard':
        return new StandardProfile(data);
      case 'creator':
        return new CreatorProfile(data);
      case 'moderator':
        return new ModeratorProfile(data);
      default:
        throw new Error(`Tipo de perfil no válido: ${type}`);
    }
  }
}

// Ejemplo de uso:
/*
const influencer = UserProfileFactory.createProfile('creator', {
  username: 'ArteDigital',
  joinDate: '2022-03-15',
  specialty: 'Ilustración digital',
  publicationsCount: 142,
  badges: ['Top Creator', 'Tendencia 2023']
});

console.log(influencer.render());
*/