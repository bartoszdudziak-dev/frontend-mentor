import Navigation from './navigation/Navigation';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr] gap-6 bg-primary-dark-blue font-primary font-light text-white md:gap-8 md:p-6 lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-8">
      <Navigation />
      <div className="px-4 md:px-0">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
