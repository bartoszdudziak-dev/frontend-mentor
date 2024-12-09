import { ReactNode } from 'react';

type ActionButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'info' | 'danger';
};

const btnVariant = {
  info: 'text-primary-moderate-blue hover:text-primary-light-grayish-blue',
  danger: 'text-primary-soft-red hover:text-primary-pale-red',
};

function ActionButton({
  variant = 'info',
  text,
  icon,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${btnVariant[variant]} flex items-center gap-2 font-medium transition-colors duration-300`}
    >
      {icon ? icon : null}
      <span>{text}</span>
    </button>
  );
}

export default ActionButton;
