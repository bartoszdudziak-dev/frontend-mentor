import { useGame } from '../../../services/context/game/useGame';
import MultiPlayerStats from './MultiPlayerStats';
import SinglePlayerStats from './SinglePlayerStats';

function Dashboard() {
  const {
    state: { mode },
  } = useGame();

  if (mode === 'singlePlayer') return <SinglePlayerStats />;
  if (mode === 'multiPlayer') return <MultiPlayerStats />;

  return null;
}

export default Dashboard;
