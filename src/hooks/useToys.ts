import { useState, useEffect } from 'react';
import { fetchToys, Toy } from '../services/toysService';

interface UseToyResult {
  toys: Toy[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useToys = (): UseToyResult => {
  const [toys, setToys] = useState<Toy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getToys = async () => {
    setLoading(true);
    
    const { toys: fetchedToys, error: fetchError } = await fetchToys();
    
    setToys(fetchedToys);
    setError(fetchError);
    setLoading(false);
  };

  // Initial fetch on component mount
  useEffect(() => {
    getToys();
  }, []);

  return {
    toys,
    loading,
    error,
    refetch: getToys
  };
}; 