import Realm from 'realm';

class Creature {
  static schema = {
    name: 'Creature',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
      xp: 'int',
      hp: 'int',
      charm: 'double',
      difficulty: 'int',
      difficultyString: 'string',
    },
  };
}

const realm = new Realm({schema: [Creature.schema]});

export default realm;
