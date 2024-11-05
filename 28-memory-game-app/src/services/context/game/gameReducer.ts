import { type GameAction, type GameState } from './types';

const initialGameState: GameState = {
  config: {
    theme: 'numbers',
    players: 1,
    size: 4,
  },
  mode: 'singlePlayer',

  singlePlayer: {
    time: 0,
    moves: 0,
  },

  multiPlayer: null,

  isStarted: true,
  isFinished: false,
  flippedCards: [],
  matchedCards: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'config/updated': {
      const isSinglePlayer = action.payload.players === 1;
      return {
        ...state,
        config: { ...action.payload },
        singlePlayer: isSinglePlayer ? { time: 0, moves: 0 } : null,
        multiPlayer: !isSinglePlayer
          ? {
              currentPlayer: 1,
              score: new Array(action.payload.players).fill(0),
            }
          : null,
        mode: isSinglePlayer ? 'singlePlayer' : 'multiPlayer',
      };
    }
    case 'game/started':
      return { ...state, isStarted: true };
    case 'game/finished':
      return { ...state, isFinished: true };
    case 'card/flipped':
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload],
      };
    case 'card/matched': {
      return {
        ...state,
        matchedCards: [...state.matchedCards, ...action.payload],
        flippedCards: [],
      };
    }
    case 'card/missed':
      return { ...state, flippedCards: [] };
    case 'player/scored': {
      if (state.mode === 'singlePlayer') {
        return {
          ...state,
          singlePlayer: {
            time: state.singlePlayer?.time || 0,
            moves: (state.singlePlayer?.moves || 0) + 1,
          },
          isFinished:
            state.matchedCards.length === state.config.size * state.config.size,
        };
      } else {
        return state;
      }
    }
    case 'player/missed': {
      if (state.mode === 'singlePlayer') {
        return {
          ...state,
          singlePlayer: {
            ...(state.singlePlayer || { time: 0, moves: 0 }),
            moves: (state.singlePlayer?.moves || 0) + 1,
          },
        };
      } else {
        return state;
      }
    }

    case 'timer/ticked': {
      if (
        state.mode === 'singlePlayer' &&
        state.isStarted &&
        !state.isFinished
      ) {
        return {
          ...state,
          singlePlayer: {
            moves: state.singlePlayer?.moves || 0,
            time: (state.singlePlayer?.time || 0) + 1,
          },
        };
      }
      return state;
    }

    default:
      throw new Error('Unknown action type');
  }
}

export { gameReducer, initialGameState };
