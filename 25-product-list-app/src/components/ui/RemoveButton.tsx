import { MouseEventHandler } from 'react';
import RemoveIcon from '../icons/RemoveIcon';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function RemoveButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex size-4 items-center justify-center rounded-full border border-rose-400 p-0.5 text-rose-400 transition-all duration-300 hover:border-black-400 hover:text-black-400"
    >
      <RemoveIcon />
    </button>
  );
}

export default RemoveButton;
