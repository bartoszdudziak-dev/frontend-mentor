import { type WithChildren } from '../../utils/commonTypes';

function Header({ children }: WithChildren) {
  return (
    <header className="bg-secondary-dark-blue p-4 shadow md:rounded-[0.625rem] md:p-5">
      {children}
    </header>
  );
}

export default Header;
