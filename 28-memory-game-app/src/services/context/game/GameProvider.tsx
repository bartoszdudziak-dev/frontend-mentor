import { type GameProviderProps } from './types';
import { gameReducer, initialGameState } from './gameReducer';
import { GameContext } from './GameContext';
import { useReducer } from 'react';

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
