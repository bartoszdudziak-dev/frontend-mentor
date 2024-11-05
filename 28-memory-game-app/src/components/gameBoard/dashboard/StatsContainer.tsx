import { ChildrenNodeProp } from '../../../utils/types';

function StatsContainer({ children }: ChildrenNodeProp) {
  return (
    <div className="gap flex w-full flex-col items-center justify-center gap-0.5 rounded bg-primary-mist-200 p-2.5 md:flex-row md:justify-between md:rounded-lg md:p-5">
      {children}
    </div>
  );
}
export default StatsContainer;
