import ToggleDarkMode from './ToggleDarkMode';

function Header() {
  return (
    <header className="bg-neutral-white px-4 py-[1.875rem] shadow-sm dark:bg-neutral-dark-blue-400 md:px-6 md:py-7 xl:px-8 xl:py-6">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <h1 className="text-sm font-extrabold md:text-xl xl:text-2xl">
          Where in the world?
        </h1>
        <ToggleDarkMode />
      </div>
    </header>
  );
}

export default Header;
