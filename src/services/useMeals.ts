import { useEffect, useState } from 'react';
import { useEnv } from '../contexts';
import { MenuItem } from '../models';
import { EnvVar } from '../utils';

export const useMeals = () => {
  const env = useEnv();
  const apiUrl = env.get(EnvVar.API_URL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [meals, setMeals] = useState<Array<MenuItem>>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${apiUrl}/get-all-meals`);
        if (!res.ok) {
          const message = `Error: ${res.status}`;
          throw new Error(message);
        }
        const meals = await res.json();
        setMeals(meals);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [apiUrl]);
  return { isError, isLoading, error, meals };
};
