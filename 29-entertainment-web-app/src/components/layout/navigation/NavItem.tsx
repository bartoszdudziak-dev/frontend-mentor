import { NavLink } from 'react-router-dom';

type NavItemProps = { to: string; icon: JSX.Element };

function NavItem({ to, icon }: NavItemProps) {
  return (
    <li>
      <NavLink className="nav-link" to={to}>
        <span className="nav-icon block w-4 shadow md:w-5">{icon}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
