import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="font-primary bg-primary-dark-blue min-h-dvh font-light text-white">
      <h1>Entertnainment app</h1>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/series">Series</Link>
      <Link to="/bookmarks">Bookmarks</Link>

      <Outlet />
    </div>
  );
}

export default Layout;
