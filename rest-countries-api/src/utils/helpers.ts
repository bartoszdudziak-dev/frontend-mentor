import { Country } from './types';

export const sortByName = (countries: Country[]) =>
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
