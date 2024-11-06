import { ChildrenNodeProp } from '../../../utils/types';

function Stats({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  const activePlayer = isActive
    ? 'text-secondary-white-50'
    : 'text-primary-teal-700';

  return (
    <span className={`${activePlayer} text-2xl leading-none md:text-[2rem]`}>
      {children}
    </span>
  );
}
export default Stats;
