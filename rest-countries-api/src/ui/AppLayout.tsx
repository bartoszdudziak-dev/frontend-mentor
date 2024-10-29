import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function AppLayout() {
  return (
    <div className="min-h-dvh bg-neutral-gray-100 font-NunitoSans leading-normal text-neutral-dark-blue-900 dark:bg-neutral-dark-blue-600 dark:text-neutral-white">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
