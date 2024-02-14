import {useCallback, useEffect, useState} from 'react';
import {Creature} from '../types/creatures';
import {fetchCreatures} from '../../services/transactions';
import {getLocalCreatures, updateLocalCreatures} from '../../database/creature';

export const useCreatures = () => {
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [loading, setLoading] = useState(false);

  const loadCreatures = useCallback(async () => {
    setLoading(true);

    let localCreatures = getLocalCreatures();
    if (localCreatures.length === 0) {
      try {
        const fetchedCreatures = await fetchCreatures();
        updateLocalCreatures(fetchedCreatures);
        localCreatures = getLocalCreatures();
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    }
    setCreatures(localCreatures);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadCreatures();
  }, [loadCreatures]);

  return {
    creatures,
    loading,
  };
};
