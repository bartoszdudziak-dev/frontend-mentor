import { getCountry } from '../../services/countriesApi';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function useCountry() {
  const { countryName } = useParams();

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['country', countryName],
    queryFn: () => getCountry(countryName || ''),
    retry: false,
  });

  return { data: data?.[0], error, isLoading, isFetching };
}
