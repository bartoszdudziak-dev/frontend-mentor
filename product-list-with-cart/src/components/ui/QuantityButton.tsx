import DecrementIcon from '../icons/DecrementIcon';
import IncrementIcon from '../icons/IncrementIcon';

type ButtonProps = {
  type: 'decrement' | 'increment';
  onClick: () => void;
};

function QuantityButton({ type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex size-5 items-center justify-center rounded-full border border-white-400 transition-colors duration-300 hover:bg-white-400 hover:text-red-400"
    >
      {type === 'decrement' && <DecrementIcon />}
      {type === 'increment' && <IncrementIcon />}
    </button>
  );
}

export default QuantityButton;
