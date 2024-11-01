import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
};

const btnVariant = {
  theme: {
    primary: 'bg-primary-golden-500 text-secondary-white-50 hover:opacity-75',
    secondary:
      'bg-primary-mist-200 text-primary-teal-700 hover:bg-secondary-aqua-500 hover:text-secondary-white-50',
  },
  size: {
    small: 'text-base md:text-xl p-2.5 md:p-3.5',
    medium: 'text-base md:text-[1.625rem] p-2.5',
    large: 'text-lg md:text-[2rem] p-3.5 md:p-5',
  },
  active: 'bg-primary-teal-700 text-secondary-white-50  pointer-events-none',
};

function Button({
  children,
  className,
  variant,
  size,
  isActive,
  ...rest
}: ButtonProps) {
  const btnStyle = `${variant ? btnVariant.theme[variant] : ''} ${size ? btnVariant.size[size] : ''} ${isActive ? btnVariant.active : ''}`;

  return (
    <button
      className={`${btnStyle} ${className ? className : ''} flex w-full items-center justify-center rounded-full font-bold leading-none shadow transition-all duration-300 hover:scale-105`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
