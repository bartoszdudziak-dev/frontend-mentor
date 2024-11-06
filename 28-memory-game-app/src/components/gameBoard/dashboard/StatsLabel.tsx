import { ChildrenNodeProp } from '../../../utils/types';

function StatsLabel({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  const activePlayer = isActive
    ? 'text-secondary-white-50'
    : 'text-secondary-steel-400';

  return (
    <div className={`${activePlayer} text-base md:text-lg`}>{children}</div>
  );
}
export default StatsLabel;
