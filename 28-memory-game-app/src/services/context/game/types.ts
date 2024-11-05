import { ReactNode } from 'react';

export type GameContextProps = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  flipCard: (card: Card) => void;
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

export type Card = {
  id: number;
  value: number;
};

export type GameState = {
  config: Config;

  mode: 'singlePlayer' | 'multiPlayer';
  singlePlayer: { time: number; moves: number } | null;
  multiPlayer: { currentPlayer: number; score: number[] } | null;

  isStarted: boolean;
  isFinished: boolean;
  flippedCards: Card[] | [];
  matchedCards: Card[] | [];
};

// Actions
type GameStart = {
  type: 'game/started';
};

type GameFinish = {
  type: 'game/finished';
};

type ConfigUpdate = {
  type: 'config/updated';
  payload: Config;
};

type CardFlip = {
  type: 'card/flipped';
  payload: Card;
};

type CardsMatched = {
  type: 'card/matched';
  payload: Card[];
};

type CardsMissed = {
  type: 'card/missed';
};

type PlayerScored = {
  type: 'player/scored';
};

type PlayerMissed = {
  type: 'player/missed';
};

type TimerTicked = {
  type: 'timer/ticked';
};

export type GameAction =
  | ConfigUpdate
  | GameStart
  | GameFinish
  | CardFlip
  | CardsMatched
  | CardsMissed
  | PlayerScored
  | PlayerMissed
  | TimerTicked;
