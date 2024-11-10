import { ReactNode } from 'react';

export type GameContextProps = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  flipCard: (card: Card) => void;
  gameRestart: () => void;
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
  board: number[];
};

export type Card = {
  id: number;
  value: ReactNode;
};
type SinglePlayer = { time: number; moves: number };
type MultiPlayer = { currentPlayer: number; score: number[] };

export type GameState = {
  config: Config;

  mode: 'singlePlayer' | 'multiPlayer';
  isStarted: boolean;
  isFinished: boolean;
  isPaused: boolean;

  flippedCards: Card[] | [];
  matchedCards: Card[] | [];

  singlePlayer: SinglePlayer;
  multiPlayer: MultiPlayer;
};

// Actions
type GameStarted = {
  type: 'game/started';
};

type GameFinished = {
  type: 'game/finished';
};

type GamePaused = {
  type: 'game/paused';
  payload: boolean;
};

type GameRestarted = {
  type: 'game/restarted';
};

type GameReseted = {
  type: 'game/reseted';
};

type ConfigUpdate = {
  type: 'config/updated';
  payload: Config;
};

type BoardGenerated = {
  type: 'board/generated';
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

type TimerTicked = {
  type: 'timer/ticked';
};

export type GameAction =
  | ConfigUpdate
  | BoardGenerated
  | GameStarted
  | GameFinished
  | GamePaused
  | GameRestarted
  | GameReseted
  | CardFlip
  | CardsMatched
  | CardsMissed
  | TimerTicked;
