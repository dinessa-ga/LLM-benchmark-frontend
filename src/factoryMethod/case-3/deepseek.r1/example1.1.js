//1
// UserProfile Classes
export class UserProfileCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Method 'render()' must be implemented");
  }
}

export class StandardProfile extends UserProfileCard {
  render() {
    return `<div class="profile standard">
              <h2>${this.data.name}</h2>
              <p>Standard user</p>
              <p>Joined: ${this.data.joinDate}</p>
            </div>`;
  }
}

export class CreatorProfile extends UserProfileCard {
  render() {
    return `<div class="profile creator">
              <h2>${this.data.name}</h2>
              <p>Content creator</p>
              <p>${this.data.worksCount} works published</p>
              <p>Speciality: ${this.data.speciality}</p>
            </div>`;
  }
}

export class ModeratorProfile extends UserProfileCard {
  render() {
    return `<div class="profile moderator">
              <h2>${this.data.name}</h2>
              <p>Community moderator</p>
              <p>Managed sections: ${this.data.managedSections.join(', ')}</p>
              <p>${this.data.reportsHandled} reports handled</p>
            </div>`;
  }
}

// Factory
export class UserProfileFactory {
  static createProfile(type, data) {
    switch (type.toLowerCase()) {
      case 'standard':
        return new StandardProfile(data);
      case 'creator':
        return new CreatorProfile(data);
      case 'moderator':
        return new ModeratorProfile(data);
      default:
        throw new Error(`Invalid profile type: ${type}`);
    }
  }
}
