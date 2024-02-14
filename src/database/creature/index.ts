import realm from '..';
import {Creature} from '../../context/types/creatures';

export const getLocalCreatures = (): Creature[] => {
  let creatures = realm.objects('Creatures');

  return creatures.map(creature => ({
    id: creature.id as string,
    name: creature.name as string,
    image: creature.image as string,
    hp: creature.hp as number,
    xp: creature.xp as number,
    charms: creature.charms as number,
    difficulty: creature.category as number,
    difficultyString: creature.lat as string,
  }));
};

export function updateLocalCreatures(fetchedCreatures: [Creature]) {
  addTransactionsToRealm(fetchedCreatures);
}

const addTransactionsToRealm = (fetchedCreatures: [Creature]) => {
  realm.write(() => {
    fetchedCreatures.forEach(creature => {
      let existingCreature = realm.objectForPrimaryKey('Creature', creature.id);
      if (!existingCreature) {
        realm.create(
          'Creature',
          {
            id: creature.id,
            name: creature.name,
            image: creature.image,
            hp: creature.hp,
            xp: creature.xp,
            charms: creature.charms,
            difficulty: creature.difficulty,
            difficultyString: creature.difficultyString,
          },
          Realm.UpdateMode.Modified,
        );
      }
    });
  });
};
