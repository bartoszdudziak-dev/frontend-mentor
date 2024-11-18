import { MdClear } from 'react-icons/md';

type ClearButtonProps = {
  onClear: () => void;
  className?: string;
};

function ClearButton({ onClear, className }: ClearButtonProps) {
  return (
    <button
      onClick={onClear}
      className={` ${className ? className : ''} text-white opacity-50 transition-all duration-300 hover:scale-105 hover:text-accent-red hover:opacity-100 md:size-8`}
    >
      <MdClear className="h-full w-full" />
    </button>
  );
}

export default ClearButton;
