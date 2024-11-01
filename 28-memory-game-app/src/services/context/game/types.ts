import { ReactNode } from 'react';

export type GameContextProps = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export type GameProviderProps = {
  children: ReactNode;
};

export type Theme = 'icons' | 'numbers';
export type Players = 1 | 2 | 3 | 4;
export type Size = 4 | 6;

export type Config = {
  theme: Theme;
  players: Players;
  size: Size;
};

export type GameState = {
  config: Config;
  isStarted: boolean;
  isFinished: boolean;
};

// Actions
type Start = {
  type: 'game/started';
};

type Finish = {
  type: 'game/finished';
};

type ConfigUpdate = {
  type: 'config/updated';
  payload: Config;
};

export type GameAction = ConfigUpdate | Start | Finish;
