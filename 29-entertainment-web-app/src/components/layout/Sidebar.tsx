import { WithChildren } from '../../utils/commonTypes';

function Sidebar({ children }: WithChildren) {
  return <aside>{children}</aside>;
}

export default Sidebar;
