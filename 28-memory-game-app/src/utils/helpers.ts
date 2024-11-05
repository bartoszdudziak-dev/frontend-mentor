import { Card } from '../services/context/game/types';

export const doCardsMatch = (cards: Card[]) => {
  if (cards.length !== 2) return false;
  return cards[0].value === cards[1].value;
};

export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
