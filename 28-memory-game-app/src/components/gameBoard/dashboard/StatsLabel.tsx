import { ChildrenNodeProp } from '../../../utils/types';

function StatsLabel({ children }: ChildrenNodeProp) {
  return (
    <div className="text-base text-secondary-steel-400 md:text-lg">
      {children}
    </div>
  );
}
export default StatsLabel;
