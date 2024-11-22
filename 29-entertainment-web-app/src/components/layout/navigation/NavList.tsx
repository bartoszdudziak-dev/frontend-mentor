import IconNavHome from '../../icons/IconNavHome';
import IconNavMovies from '../../icons/IconNavMovies';
import IconNavSeries from '../../icons/IconNavSeries';
import IconNavBookmark from '../../icons/IconNavBookmark';
import NavItem from './NavItem';

function NavList() {
  return (
    <ul className="flex items-center gap-6 md:gap-8 lg:flex-col lg:gap-10">
      <NavItem label="Go to Home" to="/" icon={<IconNavHome />} />
      <NavItem label="Go to Movies" to="/movies" icon={<IconNavMovies />} />
      <NavItem label="Go to Series" to="/series" icon={<IconNavSeries />} />
      <NavItem
        label="Go to Bookmarks"
        to="/bookmarks"
        icon={<IconNavBookmark />}
      />
    </ul>
  );
}

export default NavList;
