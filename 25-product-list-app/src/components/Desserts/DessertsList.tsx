import { Dessert } from '../../lib/types';
import DessertItem from './DessertItem';

function DessertsList({ desserts }: { desserts: Dessert[] | null }) {
  return (
    <ul className="grid gap-300 sm:grid-cols-2 md:grid-cols-3">
      {desserts?.map(dessert => (
        <DessertItem key={dessert.name} dessert={dessert} />
      ))}
    </ul>
  );
}

export default DessertsList;
