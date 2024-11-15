import Logo from '../../ui/Logo';
import Avatar from '../../ui/Avatar';
import NavList from './NavList';

function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:h-full lg:w-full lg:flex-col lg:justify-start lg:gap-20">
      <Logo className="w-6 md:w-8" />
      <NavList />
      <Avatar className="w-6 md:w-8 lg:mt-auto lg:w-10" />
    </nav>
  );
}

export default Navbar;