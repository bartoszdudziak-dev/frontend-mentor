import { useContext } from 'react';
import { GameContext } from './GameContext';

function useGame() {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error('GameContext was used outside of GameContextProvider');

  return context;
}

export { useGame };
