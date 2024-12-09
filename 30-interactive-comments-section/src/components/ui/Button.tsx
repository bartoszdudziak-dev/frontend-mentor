import { WithChildren } from '../../types/commonTypes';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & WithChildren;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="transition-color rounded-lg bg-primary-moderate-blue px-8 py-3 font-medium uppercase text-neutral-white duration-300 hover:bg-primary-light-grayish-blue disabled:pointer-events-none disabled:bg-primary-light-grayish-blue"
    >
      {children}
    </button>
  );
}

export default Button;
