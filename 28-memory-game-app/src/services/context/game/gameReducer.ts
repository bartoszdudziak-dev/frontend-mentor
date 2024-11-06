import { type GameAction, type GameState } from './types';

const initialGameState: GameState = {
  config: {
    theme: 'numbers',
    players: 1,
    size: 4,
  },

  mode: 'singlePlayer',
  isStarted: false,
  isFinished: false,
  isPaused: false,

  flippedCards: [],
  matchedCards: [],

  singlePlayer: {
    time: 0,
    moves: 0,
  },

  multiPlayer: {
    currentPlayer: 1,
    score: [0, 0],
  },
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'config/updated': {
      const isSinglePlayer = action.payload.players === 1;
      return {
        ...state,
        config: { ...action.payload },
        singlePlayer: isSinglePlayer
          ? { time: 0, moves: 0 }
          : state.singlePlayer,
        multiPlayer: !isSinglePlayer
          ? {
              currentPlayer: 1,
              score: new Array(action.payload.players).fill(0),
            }
          : state.multiPlayer,
        mode: isSinglePlayer ? 'singlePlayer' : 'multiPlayer',
      };
    }

    case 'game/started':
      return { ...state, isStarted: true };

    case 'game/finished':
      return { ...state, isFinished: true };

    case 'game/paused':
      return { ...state, isPaused: action.payload };

    case 'card/flipped':
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload],
      };

    case 'card/matched': {
      if (state.mode === 'singlePlayer') {
        return {
          ...state,
          singlePlayer: {
            ...state.singlePlayer,
            moves: state.singlePlayer.moves + 1,
          },
          matchedCards: [...state.matchedCards, ...action.payload],
          flippedCards: [],
          isFinished:
            state.matchedCards.length === state.config.size * state.config.size,
        };
      } else
        return {
          ...state,

          multiPlayer: {
            currentPlayer:
              state.multiPlayer.currentPlayer < state.config.players
                ? state.multiPlayer.currentPlayer + 1
                : 1,
            score: state.multiPlayer.score.map((playerScore, i) =>
              i + 1 === state.multiPlayer.currentPlayer
                ? playerScore + 1
                : playerScore,
            ),
          },
          matchedCards: [...state.matchedCards, ...action.payload],
          flippedCards: [],
          isFinished:
            state.matchedCards.length === state.config.size * state.config.size,
        };
    }

    case 'card/missed': {
      if (state.mode === 'singlePlayer') {
        return {
          ...state,
          singlePlayer: {
            ...state.singlePlayer,
            moves: state.singlePlayer.moves + 1,
          },
          flippedCards: [],
        };
      } else {
        return {
          ...state,
          multiPlayer: {
            ...state.multiPlayer,
            currentPlayer:
              state.multiPlayer.currentPlayer < state.config.players
                ? state.multiPlayer.currentPlayer + 1
                : 1,
          },
          flippedCards: [],
        };
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
            ...state.singlePlayer,
            time: state.singlePlayer.time + 1,
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
