import { WithChildren } from '../../utils/commonTypes';

type ContainerProps = { fullWidth?: boolean } & WithChildren;

function Container({ children, fullWidth }: ContainerProps) {
  return (
    <div
      className={`${fullWidth ? 'w-full' : 'mx-auto w-[90%] max-w-[80rem]'}`}
    >
      {children}
    </div>
  );
}

export default Container;
