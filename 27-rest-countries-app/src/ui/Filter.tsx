import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';

type OptionProps = {
  children: React.ReactNode;
  value: string;
  currentRegion: string;
  setRegion: (value: string) => void;
};

function Option({ children, value, setRegion, currentRegion }: OptionProps) {
  const isActiveOption =
    value === currentRegion || (value === 'all' && !currentRegion);

  return (
    <button
      className={`${isActiveOption ? 'font-extrabold' : ''} px-6 py-1 text-start hover:font-extrabold`}
      value={value}
      onClick={() => setRegion(value)}
    >
      {children}
    </button>
  );
}

function Filter() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentRegion = searchParams.get('region') || '';

  const setRegion = (value: string) => {
    if (value === 'all') {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('region');
      setSearchParams(params);
    } else {
      searchParams.set('region', value);
      setSearchParams(searchParams);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-[12.5rem] rounded-md text-xs shadow-md md:text-sm">
      <button
        onClick={() => setIsOpen(open => !open)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className="flex w-full items-center justify-between rounded-md bg-neutral-white px-6 py-4 dark:bg-neutral-dark-blue-400 md:py-[1.125rem]"
      >
        <span>Filter by Region</span>
        {isHovered && isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {isOpen && (
        <ul className="absolute top-full z-50 flex w-full translate-y-1 flex-col rounded-md bg-neutral-white py-3 shadow-md dark:bg-neutral-dark-blue-400">
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="all"
          >
            All
          </Option>
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="africa"
          >
            Africa
          </Option>
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="america"
          >
            America
          </Option>
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="asia"
          >
            Asia
          </Option>
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="europe"
          >
            Europe
          </Option>
          <Option
            setRegion={setRegion}
            currentRegion={currentRegion}
            value="oceania"
          >
            Oceania
          </Option>
        </ul>
      )}
    </div>
  );
}

export default Filter;
