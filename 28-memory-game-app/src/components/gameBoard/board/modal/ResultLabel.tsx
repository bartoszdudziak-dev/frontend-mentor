import { ChildrenNodeProp } from '../../../../utils/types';

function ResultLabel({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  return (
    <span
      className={`${isActive ? 'text-secondary-white-50' : 'text-secondary-steel-400'} text-sm md:text-lg`}
    >
      {children}
    </span>
  );
}
export default ResultLabel;
