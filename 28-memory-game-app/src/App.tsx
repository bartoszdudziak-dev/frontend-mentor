import GameBoard from './components/board/GameBoard';
import GameSetup from './components/menu/GameSetup';

import { useGame } from './services/context/game/useGame';

function App() {
  const {
    state: { isStarted },
  } = useGame();

  return (
    <div
      className={`${!isStarted ? 'bg-secondary-navy-800' : 'bg-secondary-white-50'} flex min-h-dvh items-center justify-center font-AtkinsonHyperlegible`}
    >
      {!isStarted ? <GameSetup /> : <GameBoard />}
    </div>
  );
}

export default App;
