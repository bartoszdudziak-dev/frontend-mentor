import { ChildrenNodeProp } from '../../../utils/types';

function Stats({ children }: ChildrenNodeProp) {
  return (
    <span className="text-2xl text-primary-teal-700 md:text-[2rem]">
      {children}
    </span>
  );
}
export default Stats;
