import Timer from '../../ui/Timer';
import Stats from './Stats';
import StatsContainer from './StatsContainer';
import StatsLabel from './StatsLabel';
import { useGame } from '../../../services/context/game/useGame';

function SinglePlayerStats() {
  const {
    state: { singlePlayer },
  } = useGame();

  return (
    <div className="mx-auto flex w-full max-w-[33.75rem] gap-6 md:gap-8">
      <StatsContainer>
        <StatsLabel>Timer</StatsLabel>
        <Stats>
          <Timer />
        </Stats>
      </StatsContainer>
      <StatsContainer>
        <StatsLabel>Moves</StatsLabel>
        <Stats>{singlePlayer?.moves}</Stats>
      </StatsContainer>
    </div>
  );
}

export default SinglePlayerStats;
