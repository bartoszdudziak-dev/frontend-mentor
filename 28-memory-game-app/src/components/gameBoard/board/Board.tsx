import Card from './Card';
import { useGame } from '../../../services/context/game/useGame';
import shuffle from 'lodash/shuffle';
import { useMemo } from 'react';

function Board() {
  const {
    state: {
      config: { size },
    },
  } = useGame();

  const cardValues = useMemo(
    () =>
      shuffle(Array.from({ length: size * size }, (_, i) => Math.floor(i / 2))),
    [size],
  );

  const gridSize = {
    4: 'grid-cols-4 grid-rows-4 gap-3 md:gap-5 md:max-w-[532px] text-[2.5rem] md:text-[3.5rem]',
    6: 'grid-cols-6 grid-cols-6 gap-2 md:gap-4 md:max-w-[572px] text-2xl md:text-5xl',
  };

  // if (isFinished) return <div className="text-black">Congratulations</div>;

  return (
    <div
      className={`${gridSize[size]} mx-auto grid w-full max-w-[375px] place-self-center text-secondary-white-50`}
    >
      {Array.from({ length: size * size }).map((_, i) => (
        <Card key={i} id={i} value={cardValues[i]} />
      ))}
    </div>
  );
}

export default Board;
