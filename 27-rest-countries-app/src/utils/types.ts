export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
}

export type CountryProps = {
  country: {
    flag: string;
    alt: string;
    name: string;
    population: number;
    region: string;
    capital: string;
  };
};

export type CountrySuperProps = {
  country: {
    tld: string;
    currencies: string[];
    languages: string[];
    borders: string[];
    subregion: string;
    nativeName: string;
  } & CountryProps['country'];
};

export interface CountryDetails extends Country {
  tld: string[];
  currencies: Currencies;
  subregion: string;
  languages: Languages;
  borders: string[];
}

export interface NeighbourName {
  name: Name;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  [languageCode: string]: {
    official: string;
    common: string;
  };
}

interface CurrencyInfo {
  name: string;
  symbol: string;
}

interface Currencies {
  [currencyCode: string]: CurrencyInfo;
}

interface Languages {
  [languageCode: string]: string;
}
