import { useEffect, useState } from 'react';
import { Dessert } from '../lib/types';
import { FAKE_FETCHING_TIME } from '../utils/const';

export function useDesserts() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState('');
  const [desserts, setDesserts] = useState<Dessert[] | null>(null);

  const getDessertDetails = (name: string) =>
    desserts?.find(dessert => dessert.name === name);

  // Fake fetching
  useEffect(() => {
    setIsLoading(true);
    const fetchData = setTimeout(async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setDesserts(data);
      } catch (error) {
        if (error instanceof Error) setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, FAKE_FETCHING_TIME);

    return () => {
      clearTimeout(fetchData);
    };
  }, []);

  return { error, isLoading, desserts, getDessertDetails };
}
