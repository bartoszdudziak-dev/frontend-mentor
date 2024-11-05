import Header from './header/Header';
import Board from './board/Board';
import Dashboard from './dashboard/Dashboard';

function GameBoard() {
  return (
    <div className="mx-auto max-w-[1110px]">
      <section className="grid min-h-dvh grid-rows-[auto_1fr_auto] p-6 md:p-6">
        <Header />
        <Board />
        <Dashboard />
      </section>
    </div>
  );
}

export default GameBoard;