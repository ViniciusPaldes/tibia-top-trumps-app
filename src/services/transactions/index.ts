import Config from 'react-native-config';
import {Creature} from '../../context/types/creatures';

export async function fetchCreatures() {
  try {
    const response = await fetch(`${Config.API_URL}/tibia-wiki-creatures`);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`,
      );
    }

    const data = await response.json();

    return data.map((creature: Creature) => ({
      name: creature.name,
      image: creature.image,
      hp: creature.hp,
      xp: creature.xp,
      charms: creature.charms,
      difficulty: creature.difficulty,
      difficultyString: creature.difficultyString,
    }));
  } catch (error) {
    console.error('Failed to fetch creatures:', error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
}
