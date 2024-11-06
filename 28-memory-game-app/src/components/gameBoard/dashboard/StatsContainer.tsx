import { ChildrenNodeProp } from '../../../utils/types';

function StatsContainer({
  children,
  isActive,
}: { isActive?: boolean } & ChildrenNodeProp) {
  const activePlayer = isActive
    ? 'bg-primary-golden-500'
    : 'bg-primary-mist-200';
  return (
    <div className="flex-1">
      <div
        className={`${activePlayer} gap relative flex w-full flex-col items-center justify-center gap-0.5 rounded p-2.5 shadow-sm transition-all duration-300 md:flex-row md:justify-between md:rounded-lg md:p-5`}
      >
        {children}

        <div
          className={`${isActive ? 'opacity-100' : 'opacity-0'} absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 translate-y-[1px] border-b-[10px] border-l-[10px] border-r-[10px] border-b-primary-golden-500 border-l-transparent border-r-transparent transition-all duration-300 md:border-b-[20px] md:border-l-[20px] md:border-r-[20px]`}
        ></div>
      </div>
      {isActive && (
        <span className="mt-6 hidden text-center text-sm uppercase tracking-[0.35em] text-secondary-navy-800 lg:block">
          Current turn
        </span>
      )}
    </div>
  );
}
export default StatsContainer;
