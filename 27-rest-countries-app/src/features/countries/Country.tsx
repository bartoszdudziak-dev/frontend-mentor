import { Link } from 'react-router-dom';
import { CountrySuperProps } from '../../utils/types';

type InfoProps = {
  label: string;
  value: string | number;
};

function Info({ label, value }: InfoProps) {
  return (
    <div className="max-w-52 text-sm md:text-base">
      <span className="font-bold">{label}</span>{' '}
      <span className="font-light">{value}</span>
    </div>
  );
}

function Neighbour({ neighbour }: { neighbour: string }) {
  return (
    <Link
      to={`/country/${neighbour}`}
      className="rounded-sm bg-neutral-white px-4 py-1.5 text-xs font-light shadow-md transition-all hover:scale-105 hover:opacity-80 dark:bg-neutral-dark-blue-400 md:rounded md:text-sm"
    >
      {neighbour}
    </Link>
  );
}

function Country({ country }: CountrySuperProps) {
  return (
    <div className="mx-auto flex max-w-80 flex-col items-center justify-between gap-11 sm:max-w-96 md:max-w-[30rem] lg:max-w-none lg:flex-row lg:gap-36">
      <div className="max-w-[30rem] overflow-hidden rounded-md shadow-md lg:shadow-lg">
        <img src={country.flag} alt={country.alt}></img>
      </div>

      <div className="w-full max-w-[35rem]">
        <h3 className="mb-4 text-2xl font-extrabold md:text-3xl lg:mb-6">
          {country.name}
        </h3>

        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row lg:mb-16">
          <div className="space-y-3">
            <Info label="Native name" value={country.nativeName} />
            <Info label="Population" value={country.population} />
            <Info label="Region" value={country.region} />
            <Info label="Sub Region" value={country.subregion} />
            <Info label="Capital" value={country.capital} />
          </div>

          <div className="space-y-3">
            <Info label="Top Level Domain" value={country.tld} />
            <Info label="Currencies" value={country.currencies.join(', ')} />
            <Info label="Languages" value={country.languages.join(', ')} />
          </div>
        </div>

        {country.borders.length > 0 && (
          <div className="flex flex-col gap-4 lg:flex-row">
            <h4 className="shrink-0 font-semibold">Border Countries: </h4>
            <div className="gap flex flex-wrap gap-2.5">
              {country.borders.map(neighbour => (
                <Neighbour key={neighbour} neighbour={neighbour} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Country;
