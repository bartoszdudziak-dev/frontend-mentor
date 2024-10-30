import DessertsList from './DessertsList';
import Heading from '../ui/Heading';
import Spinner from '../ui/Spinner';

import { useDesserts } from '../../hooks/useDesserts';

function Desserts() {
  const { error, isLoading, desserts } = useDesserts();

  return (
    <div className="space-y-400">
      <Heading />

      {isLoading && <Spinner />}

      {!isLoading && (error || desserts?.length === 0) ? (
        <p>No desserts found</p>
      ) : (
        <DessertsList desserts={desserts} />
      )}
    </div>
  );
}

export default Desserts;
