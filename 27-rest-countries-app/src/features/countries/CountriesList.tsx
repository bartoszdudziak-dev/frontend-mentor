import { Country } from '../../utils/types';
import CountryItem from './CountryItem';

type CountriesProps = {
  data: Country[];
};

function CountriesList({ data }: CountriesProps) {
  return (
    <ul className="my-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-[4.75rem] lg:my-16 lg:grid-cols-4">
      {data.map((country: Country) => (
        <CountryItem
          key={country.name.common}
          country={{
            flag: country.flags.svg,
            alt: country.flags.alt,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital[0],
          }}
        />
      ))}
    </ul>
  );
}

export default CountriesList;
