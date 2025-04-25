//3
// user-profile.js

class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Method 'render' must be implemented.");
  }

  getProfileType() {
    return "Generic";
  }
}

class StandardProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile standard">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Type: ${this.getProfileType()}</p>
      </div>
    `;
  }

  getProfileType() {
    return "Standard";
  }
}

class CreatorProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile creator">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Type: ${this.getProfileType()}</p>
        <p>Bio: ${this.data.bio}</p>
      </div>
    `;
  }

  getProfileType() {
    return "Creator";
  }
}

class ModeratorProfile extends UserProfileCard {
  render() {
    return `
      <div class="user-profile moderator">
        <h2>${this.data.name}</h2>
        <p>Email: ${this.data.email}</p>
        <p>Type: ${this.getProfileType()}</p>
        <p>Permissions: ${this.data.permissions}</p>
      </div>
    `;
  }

  getProfileType() {
    return "Moderator";
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
        throw new Error(`Unknown profile type: ${type}`);
    }
  }
}

export { UserProfileCard, StandardProfile, CreatorProfile, ModeratorProfile, UserProfileFactory };