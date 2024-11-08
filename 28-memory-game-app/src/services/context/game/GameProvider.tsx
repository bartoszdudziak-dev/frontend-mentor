import { type Card, type GameProviderProps } from './types';
import { gameReducer, initialGameState } from './gameReducer';
import { GameContext } from './GameContext';
import { useEffect, useReducer } from 'react';
import { doCardsMatch } from '../../../utils/helpers';
import {
  BOARD_GENERATING_DELAY,
  CARD_MATCHING_DURATION,
} from '../../../utils/constants';

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const { flippedCards } = state;

  function flipCard(card: Card) {
    if (flippedCards.length === 2) return;
    dispatch({ type: 'card/flipped', payload: card });
  }

  function gameRestart() {
    dispatch({ type: 'game/restarted' });

    setTimeout(() => {
      dispatch({ type: 'board/generated' });
    }, BOARD_GENERATING_DELAY);
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (flippedCards.length === 2) {
      if (doCardsMatch(flippedCards))
        timeout = setTimeout(() => {
          dispatch({ type: 'card/matched', payload: flippedCards });
        }, CARD_MATCHING_DURATION);
      else {
        timeout = setTimeout(() => {
          dispatch({ type: 'card/missed' });
        }, CARD_MATCHING_DURATION);
      }
    }

    return () => clearTimeout(timeout);
  }, [flippedCards]);

  return (
    <GameContext.Provider value={{ state, dispatch, flipCard, gameRestart }}>
      {children}
    </GameContext.Provider>
  );
}
