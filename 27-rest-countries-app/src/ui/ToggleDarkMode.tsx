import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

import { useDarkMode } from '../context/DarkModeContext';

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="text-xs md:text-sm xl:text-base">
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-110 hover:opacity-50"
      >
        {isDarkMode ? <BsMoonFill /> : <BsMoon />}
        <span>Dark Mode</span>
      </button>
    </div>
  );
}

export default ToggleDarkMode;
