import GameBoard from './components/gameBoard/GameBoard';
import GameSetup from './components/gameMenu/GameSetup';

import { useGame } from './services/context/game/useGame';

function App() {
  const {
    state: { isStarted },
  } = useGame();

  return (
    <main
      className={`${!isStarted ? 'bg-secondary-navy-800' : 'bg-secondary-white-50'} font-AtkinsonHyperlegible`}
    >
      {!isStarted ? <GameSetup /> : <GameBoard />}
    </main>
  );
}

export default App;
