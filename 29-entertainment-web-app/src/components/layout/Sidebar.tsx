import { type WithChildren } from '../../utils/commonTypes';

function Sidebar({ children }: WithChildren) {
  return (
    <aside className="w-24 rounded-[1.25rem] bg-secondary-dark-blue p-8 shadow">
      {children}
    </aside>
  );
}

export default Sidebar;
