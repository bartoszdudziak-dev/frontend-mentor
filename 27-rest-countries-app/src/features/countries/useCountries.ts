import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../../services/countriesApi';
import { useSearchParams } from 'react-router-dom';

export function useContries() {
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region') || '';

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['countries', region],
    queryFn: () => getCountries(region),
    retry: false,
  });

  return { data, error, isLoading, isFetching };
}
