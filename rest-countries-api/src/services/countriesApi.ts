import {
  NeighbourName,
  type Country,
  type CountryDetails,
} from '../utils/types';
import {
  API_URL,
  FIELDS_BASIC,
  FIELDS_DETAILS,
  FIELDS_NAME,
} from '../utils/constants';
import { sortByName } from '../utils/helpers';

export async function getCountries(region: string): Promise<Country[]> {
  const endpoint = !region
    ? `${API_URL}/all?${FIELDS_BASIC}`
    : `${API_URL}/region/${region}?${FIELDS_BASIC}`;

  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  return sortByName(data);
}

async function getNameContryNameByCode(code: string): Promise<NeighbourName[]> {
  const response = await fetch(`${API_URL}/alpha/${code}?${FIELDS_NAME}`);

  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  return data;
}

export async function getCountry(name: string): Promise<CountryDetails[]> {
  const response = await fetch(
    `${API_URL}/name/${name}?fullText=true&${FIELDS_DETAILS}`,
  );

  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  if (data && data.length !== 0) {
    const borderCodes = data[0]?.borders.map((borderCode: string) =>
      getNameContryNameByCode(borderCode),
    );

    await Promise.all(borderCodes)
      .then(neighbours => {
        data[0].borders = neighbours.map(neighbour => neighbour.name.common);
      })
      .catch(error => {
        console.error('One of the tasks failed:', error);
      });
  }

  return data;
}
