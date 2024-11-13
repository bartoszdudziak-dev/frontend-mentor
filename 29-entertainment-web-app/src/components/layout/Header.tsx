import { type WithChildren } from '../../utils/commonTypes';

function Header({ children }: WithChildren) {
  return (
    <header className="rounded-[0.625rem] bg-secondary-dark-blue p-4 shadow md:p-5">
      {children}
    </header>
  );
}

export default Header;
