import { useGame } from '../../../services/context/game/useGame';
import Stats from './Stats';
import StatsContainer from './StatsContainer';
import StatsLabel from './StatsLabel';

function MultiPlayerStats() {
  const {
    state: { multiPlayer },
  } = useGame();

  return (
    <div className="mx-auto flex w-full max-w-[1158px] gap-6 md:gap-8">
      {multiPlayer?.score.map((playerScore: number, i) => (
        <StatsContainer key={i} isActive={multiPlayer.currentPlayer - 1 === i}>
          <StatsLabel isActive={multiPlayer.currentPlayer - 1 === i}>
            <span className="md:hidden">{`P${i + 1}`}</span>
            <span className="hidden md:block">{`Player ${i + 1}`}</span>
          </StatsLabel>
          <Stats isActive={multiPlayer.currentPlayer - 1 === i}>
            {playerScore}
          </Stats>
        </StatsContainer>
      ))}
    </div>
  );
}

export default MultiPlayerStats;
