import { type Card } from '../../../services/context/game/types';
import FlipButton from './FlipButton';
import ReactCardFlip from 'react-card-flip';
import { useGame } from '../../../services/context/game/useGame';
import { doCardsMatch } from '../../../utils/helpers';

function Card(card: Card) {
  const {
    flipCard,
    state: { flippedCards, matchedCards },
  } = useGame();

  return (
    <ReactCardFlip
      isFlipped={
        flippedCards.some(flippedCard => flippedCard.id === card.id) ||
        matchedCards.some(matchedCard => matchedCard.id === card.id)
      }
      flipDirection="horizontal"
      containerClassName={
        flippedCards.some(flippedCard => flippedCard.id === card.id) ||
        matchedCards.some(matchedCard => matchedCard.id === card.id)
          ? ''
          : ''
      }
    >
      <FlipButton onClick={() => flipCard(card)} value={card.value} />
      <FlipButton
        value={card.value}
        isActive={
          flippedCards.some(flippedCard => flippedCard.id === card.id) &&
          doCardsMatch(flippedCards)
        }
        isMatched={matchedCards.some(matchedCard => matchedCard.id === card.id)}
      />
    </ReactCardFlip>
  );
}

export default Card;
