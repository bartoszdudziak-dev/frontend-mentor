import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

import { useDarkMode } from '../context/DarkModeContext';

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center gap-2.5 text-xs md:text-sm xl:text-base">
      <button
        onClick={toggleDarkMode}
        className="transition-all duration-300 hover:scale-110 hover:opacity-50"
      >
        {isDarkMode ? <BsMoonFill /> : <BsMoon />}
      </button>
      <span>Dark Mode</span>
    </div>
  );
}

export default ToggleDarkMode;
