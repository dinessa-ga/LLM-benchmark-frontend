// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/claude/example1.1.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/claude/example1.2.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/claude/example1.3.js';

// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/deepseek.r1/example1.1.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/deepseek.r1/example1.2.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/deepseek.r1/example1.3.js';

import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gemini-2.0/example1.1.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gemini-2.0/example1.2.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gemini-2.0/example1.3.js'; 

// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gpt-4o1-p/example1.1.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gpt-4o1-p/example1.2.js';
// import {UserProfileCard, CreatorProfile, ModeratorProfile, UserProfileFactory} from '../../src/factoryMethod/case-3/gpt-4o1-p/example1.3.js'; 


describe('UserProfileFactory', () => {
  it('usa la instancia de perfil sin acoplarse a su implementación concreta', () => {
    const data = { name: 'Test User' };
    // Aquí se crea un perfil sin importar la implementación concreta
    const profile = UserProfileFactory.createProfile('creator', data);

    // Se verifica que la instancia cuenta con métodos esperados de la interfaz/base,
    // sin referirnos a la clase concreta.
    expect(typeof profile.render).toBe('function');
    expect(typeof profile.update).toBe('function');
  });

  it('devuelve una instancia de CreatorProfile si el tipo es "creator"', () => {
    const data = { name: 'Jane Creator', bio: 'Bio de creador' };
    const profile = UserProfileFactory.createProfile('creator', data);
    
    // Se verifica que al pasar "creator" se obtiene una instancia de CreatorProfile
    expect(profile).toBeInstanceOf(CreatorProfile);
  });

  it('devuelve una instancia de ModeratorProfile si el tipo es "moderator"', () => {
    const data = { name: 'Mike Moderator', level: 3 };
    const profile = UserProfileFactory.createProfile('moderator', data);
    
    // Se verifica que al pasar "moderator" se obtiene una instancia de ModeratorProfile
    expect(profile).toBeInstanceOf(ModeratorProfile);
  });

  it('todas las instancias deben extender de UserProfileCard', () => {
    const creatorData = { name: 'Creator One' };
    const moderatorData = { name: 'Moderator One' };

    const creatorProfile = UserProfileFactory.createProfile('creator', creatorData);
    const moderatorProfile = UserProfileFactory.createProfile('moderator', moderatorData);
    
    // Se confirma que las instancias creadas heredan de UserProfileCard, respetando el DIP
    expect(creatorProfile).toBeInstanceOf(UserProfileCard);
    expect(moderatorProfile).toBeInstanceOf(UserProfileCard);
  });
});