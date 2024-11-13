import { Link } from 'react-router-dom';

type NavItemProps = { to: string; icon: JSX.Element };

function NavItem({ to, icon }: NavItemProps) {
  return (
    <li className="text-accent-gray w-4 shadow transition-all duration-200 hover:scale-105 hover:text-white md:w-5">
      <Link to={to}>{icon}</Link>
    </li>
  );
}

export default NavItem;
