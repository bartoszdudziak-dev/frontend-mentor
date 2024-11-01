import { type GameContextProps } from './types';
import { createContext } from 'react';

const GameContext = createContext<GameContextProps | undefined>(undefined);

export { GameContext };
