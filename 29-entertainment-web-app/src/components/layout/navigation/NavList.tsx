import IconNavHome from '../../icons/IconNavHome';
import IconNavMovies from '../../icons/IconNavMovies';
import IconNavSeries from '../../icons/IconNavSeries';
import IconNavBookmark from '../../icons/IconNavBookmark';
import NavItem from './NavItem';

function NavList() {
  return (
    <ul className="flex items-center gap-6 md:gap-8 lg:flex-col lg:gap-10">
      <NavItem to="/" icon={<IconNavHome />} />
      <NavItem to="/movies" icon={<IconNavMovies />} />
      <NavItem to="/series" icon={<IconNavSeries />} />
      <NavItem to="/bookmarks" icon={<IconNavBookmark />} />
    </ul>
  );
}

export default NavList;
