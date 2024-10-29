import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import Country from './Country';
import ButtonBack from '../../ui/ButtonBack';

import { useCountry } from './useCountry';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const { data: country, error, isLoading } = useCountry();

  return (
    <div className="mt-10 space-y-16 md:mt-20 lg:space-y-20">
      <div className="space-y-2">
        <Link
          className="text-xs font-light opacity-50 transition-all hover:opacity-100 lg:text-sm"
          to={'/'}
        >
          Go to Homepage
        </Link>
        <ButtonBack />
      </div>
      {isLoading ? (
        <Spinner />
      ) : error || !country ? (
        <Error message="Country not found" />
      ) : (
        <Country
          country={{
            flag: country.flags.svg,
            alt: country.flags.alt,
            borders: country.borders,
            capital: country.capital[0],
            currencies: Object.values(country.currencies).map(
              currency => currency.name,
            ),
            languages: Object.values(country.languages),
            name: country.name.common,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            tld: country.tld[0],
            nativeName: Object.values(country.name.nativeName)[0].common,
          }}
        />
      )}
    </div>
  );
}

export default CountryDetails;
