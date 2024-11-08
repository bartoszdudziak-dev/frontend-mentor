import { ChildrenNodeProp } from '../../../../utils/types';

function Result({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  return (
    <span
      className={`${isActive ? 'text-secondary-white-50' : 'text-primary-teal-700'} text-xl md:text-3xl`}
    >
      {children}
    </span>
  );
}
export default Result;
