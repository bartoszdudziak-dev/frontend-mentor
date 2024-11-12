import { WithChildren } from '../../utils/commonTypes';

function Header({ children }: WithChildren) {
  return <header>{children}</header>;
}

export default Header;
