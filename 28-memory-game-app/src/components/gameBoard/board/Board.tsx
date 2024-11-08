import { FiAnchor } from 'react-icons/fi';
import { FaBasketballBall, FaAppleAlt, FaCar, FaTree } from 'react-icons/fa';
import {
  GiBeachBall,
  GiChessKnight,
  GiDiamondRing,
  GiHotDog,
} from 'react-icons/gi';
import { AiOutlineHeart, AiOutlineCloud, AiOutlineBell } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { MdPets, MdEmojiNature } from 'react-icons/md';
import { RiSunLine } from 'react-icons/ri';
import { FaFish } from 'react-icons/fa';
import { GiFeather } from 'react-icons/gi';
import Card from './Card';
import { useGame } from '../../../services/context/game/useGame';
import ModalFinish from './modal/ModalFinish';

const memoryIcons = [
  <FiAnchor />,
  <FaBasketballBall />,
  <GiBeachBall />,
  <AiOutlineHeart />,
  <BsStar />,
  <FaAppleAlt />,
  <GiChessKnight />,
  <MdPets />,
  <FaCar />,
  <GiDiamondRing />,
  <AiOutlineCloud />,
  <RiSunLine />,
  <FaTree />,
  <GiHotDog />,
  <MdEmojiNature />,
  <AiOutlineBell />,
  <FaFish />,
  <GiFeather />,
];

function Board() {
  const {
    state: {
      config: { size, board, theme },
    },
  } = useGame();

  const gridSize = {
    4: 'grid-cols-4 grid-rows-4 gap-3 md:gap-5 md:max-w-[532px] text-[2.5rem] md:text-[3.5rem]',
    6: 'grid-cols-6 grid-cols-6 gap-2 md:gap-4 md:max-w-[572px] text-2xl md:text-5xl',
  };

  return (
    <>
      <div
        className={`${gridSize[size]} mx-auto grid w-full max-w-[375px] place-self-center text-secondary-white-50`}
      >
        {Array.from({ length: size * size }).map((_, i) => (
          <Card
            key={i}
            id={i}
            value={theme === 'numbers' ? board[i] : memoryIcons[board[i]]}
          />
        ))}
      </div>

      <ModalFinish />
    </>
  );
}

export default Board;
