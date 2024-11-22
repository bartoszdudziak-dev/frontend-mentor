import { RiLoader4Fill } from 'react-icons/ri';

type SpinnerProps = {
  absoluteCentered?: boolean;
};

function Spinner({ absoluteCentered = false }: SpinnerProps) {
  return (
    <div
      className={
        absoluteCentered
          ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          : ''
      }
    >
      <RiLoader4Fill className="size-16 animate-spin text-accent-gray md:size-20 lg:size-24" />
    </div>
  );
}

export default Spinner;
