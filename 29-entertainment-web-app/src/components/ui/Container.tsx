import { type WithChildren, type WithClassName } from '../../utils/commonTypes';

type ContainerProps = { fullWidth?: boolean } & WithChildren & WithClassName;

function Container({ children, className, fullWidth = false }: ContainerProps) {
  return (
    <div
      className={`${className ? className : ''} ${fullWidth ? 'w-full' : 'mx-auto max-w-[80rem]'} h-full`}
    >
      {children}
    </div>
  );
}

export default Container;
