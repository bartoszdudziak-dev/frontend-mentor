import { Link } from 'react-router-dom';
import { CountryProps } from '../../utils/types';

function CountryItem({ country }: CountryProps) {
  return (
    <li>
      <Link
        to={`/country/${country.name}`}
        className="mx-auto flex h-full w-full max-w-[264px] flex-col overflow-hidden rounded-md bg-neutral-white shadow-md transition-all hover:scale-105 dark:bg-neutral-dark-blue-400"
      >
        <img
          src={country.flag}
          alt={country.alt}
          className="h-full max-h-40 object-cover"
        />
        <div className="space-y-4 px-6 pb-10 pt-6">
          <h3 className="text-wrap text-lg font-extrabold">{country.name}</h3>
          <div className="space-y-2 text-sm">
            <div className="font-semibold">
              Population:{' '}
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </div>
            <div className="font-semibold">
              Region: <span className="font-light">{country.region}</span>
            </div>
            <div className="font-semibold">
              Capital: <span className="font-light">{country.capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CountryItem;
