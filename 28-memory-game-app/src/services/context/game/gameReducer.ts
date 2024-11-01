import { type GameAction, type GameState } from './types';

const initialGameState: GameState = {
  config: {
    theme: 'icons',
    players: 1,
    size: 4,
  },
  isStarted: false,
  isFinished: false,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'config/updated':
      return { ...state, config: { ...action.payload } };
    case 'game/started':
      return { ...state, isStarted: true };
    case 'game/finished':
      return { ...state, isFinished: true };
    default:
      throw new Error('Unknown action type');
  }
}

export { gameReducer, initialGameState };
