import { NavLink } from 'react-router-dom';

type NavItemProps = { to: string; icon: JSX.Element; label: string };

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <li>
      <NavLink className="nav-link" to={to} aria-label={label}>
        <span className="nav-icon block w-4 shadow md:w-5">{icon}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
