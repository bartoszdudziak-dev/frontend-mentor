import { type Country } from '../../utils/types';

import Spinner from '../../ui/Spinner';
import CountriesList from './CountriesList';
import Search from '../../ui/Search';
import Filter from '../../ui/Filter';
import Error from '../../ui/Error';

import { useContries } from './useCountries';
import { useSearchParams } from 'react-router-dom';

function ContriesContainer() {
  const { data, error, isLoading, isFetching } = useContries();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  let filteredData: Country[] | undefined;

  if (name && data) {
    filteredData = data?.filter((country: Country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase()),
    );
  } else filteredData = data;

  return (
    <div className="mt-6 flex flex-col lg:mt-12">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        <Search />
        <Filter />
      </div>

      {isLoading || isFetching ? (
        <Spinner />
      ) : error || !filteredData?.length ? (
        <Error message="Country not found" />
      ) : (
        <CountriesList data={filteredData} />
      )}
    </div>
  );
}

export default ContriesContainer;
