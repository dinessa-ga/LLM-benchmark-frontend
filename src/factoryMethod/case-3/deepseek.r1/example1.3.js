//3
// UserProfileCard.js
export class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Render method must be implemented in subclass');
  }
}

// Implementaciones concretas de perfiles
export class StandardProfile extends UserProfileCard {
  render() {
    return `
      <div class="profile-card standard">
        <h2>${this.data.username}</h2>
        <div class="meta">
          <span>📅 Joined: ${this.data.joinDate}</span>
          <span>🌟 Rating: ${this.data.rating || 'N/A'}</span>
        </div>
        ${this.data.bio ? `<p class="bio">${this.data.bio}</p>` : ''}
      </div>
    `;
  }
}

export class CreatorProfile extends UserProfileCard {
  render() {
    return `
      <div class="profile-card creator">
        <div class="creator-header">
          <h2>${this.data.username} 🎨</h2>
          ${this.data.isVerified ? '<span class="verified">✓</span>' : ''}
        </div>
        <div class="stats">
          <p>Specialty: ${this.data.specialty}</p>
          <p>Creations: ${this.data.creationsCount}</p>
          <p>Followers: ${this.data.followers.toLocaleString()}</p>
        </div>
        <div class="badges">
          ${(this.data.badges || []).map(b => `<span class="badge">${b}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

export class ModeratorProfile extends UserProfileCard {
  render() {
    return `
      <div class="profile-card moderator">
        <h2>${this.data.username} ⚖️</h2>
        <div class="mod-info">
          <p>Level: ${this.data.modLevel}</p>
          <p>Experience: ${this.data.experienceYears}+ years</p>
          <p>Managed communities: ${this.data.communitiesManaged}</p>
        </div>
        <div class="activity">
          <p>Cases handled: ${this.data.casesHandled}</p>
          <p>Last activity: ${this.data.lastActivity}</p>
        </div>
      </div>
    `;
  }
}

// Fábrica de perfiles
export class UserProfileFactory {
  static createProfile(type, data) {
    const profileType = type.toLowerCase().trim();
    
    switch(profileType) {
      case 'standard':
        return new StandardProfile(data);
      case 'creator':
        return new CreatorProfile(data);
      case 'moderator':
        return new ModeratorProfile(data);
      default:
        throw new Error(`Unsupported profile type: ${type}`);
    }
  }
}

/* Ejemplo de uso:
import { UserProfileFactory } from './UserProfileCard.js';

const contentCreator = UserProfileFactory.createProfile('creator', {
  username: 'DigitalArtist',
  isVerified: true,
  specialty: '3D Modeling',
  creationsCount: 215,
  followers: 125000,
  badges: ['Pro Creator', 'Innovator 2024']
});

console.log(contentCreator.render());
*/