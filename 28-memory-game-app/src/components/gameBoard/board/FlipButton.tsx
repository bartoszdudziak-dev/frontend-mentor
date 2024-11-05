type FlipButtonProps = {
  value?: number;
  onClick?: () => void;
  isMatched?: boolean;
  isActive?: boolean;
};

function FlipButton({ value, onClick, isMatched, isActive }: FlipButtonProps) {
  const buttonColorStatus = isActive
    ? 'bg-primary-golden-500'
    : isMatched
      ? 'bg-primary-sky-300'
      : 'bg-primary-teal-700 hover:scale-105';

  return (
    <button
      className={`${buttonColorStatus} ${!onClick ? 'pointer-events-none' : 'hover:scale-90 hover:opacity-90'} flex aspect-square h-full w-full items-center justify-center rounded-full transition-all duration-300`}
      onClick={onClick}
    >
      {value ?? ''}
    </button>
  );
}

export default FlipButton;
