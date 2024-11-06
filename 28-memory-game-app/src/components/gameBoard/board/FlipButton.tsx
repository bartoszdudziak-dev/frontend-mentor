import { ReactNode } from 'react';

type FlipButtonProps = {
  value?: ReactNode;
  onClick?: () => void;
  isMatched?: boolean;
  isActive?: boolean;
};

function FlipButton({ value, onClick, isMatched, isActive }: FlipButtonProps) {
  const buttonColorStatus = isActive
    ? 'bg-primary-golden-500'
    : isMatched
      ? 'bg-primary-sky-300'
      : 'bg-primary-teal-700';

  return (
    <button
      className={`${buttonColorStatus} ${!onClick ? 'pointer-events-none' : 'hover:scale-95 hover:bg-secondary-aqua-500'} flex aspect-square h-full w-full items-center justify-center rounded-full shadow transition-all duration-300`}
      onClick={onClick}
    >
      {value ?? ''}
    </button>
  );
}

export default FlipButton;
