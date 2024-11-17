import { RiLoader4Fill } from 'react-icons/ri';

function Spinner() {
  return (
    <div>
      <RiLoader4Fill className="mx-auto size-16 animate-spin text-accent-gray md:size-20 lg:size-24" />
    </div>
  );
}

export default Spinner;
