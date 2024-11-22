import Navigation from './navigation/Navigation';
import SearchBar from './SearchBar';
import Main from './Main';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr] gap-6 overflow-hidden bg-primary-dark-blue font-primary font-light text-white md:gap-8 md:p-6 lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-8 lg:p-8">
      <Navigation />
      <div className="flex flex-col overflow-hidden px-4 md:px-0">
        <SearchBar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default Layout;
