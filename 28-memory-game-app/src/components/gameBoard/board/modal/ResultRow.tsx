import { ChildrenNodeProp } from '../../../../utils/types';

function ResultRow({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  return (
    <div
      className={`${isActive ? 'bg-secondary-navy-800' : 'bg-primary-mist-200'} flex items-center justify-between rounded-md p-4 shadow-sm md:rounded-lg md:px-8 md:py-6`}
    >
      {children}
    </div>
  );
}
export default ResultRow;
