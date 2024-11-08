import ReactModal from 'react-modal';
import Button from '../../../ui/Button';
import { useGame } from '../../../../services/context/game/useGame';
import { modalStyle } from '../../../../utils/constants';

import { formatTime } from '../../../../utils/helpers';
import ResultRow from './ResultRow';
import ResultLabel from './ResultLabel';
import Result from './Result';

const convertScoreArray = (scoreArray: number[]) => {
  return scoreArray
    .map((score, index) => {
      return { score, index };
    })
    .sort((a, b) => b.score - a.score);
};

function ModalFinish() {
  const {
    state: { isFinished, multiPlayer, singlePlayer, mode },
    gameRestart,
    dispatch,
  } = useGame();

  const maxScore = Math.max(...multiPlayer.score);

  return (
    <ReactModal
      isOpen={isFinished}
      style={{
        ...modalStyle,
        content: { ...modalStyle.content, maxWidth: '654px' },
      }}
      appElement={document.getElementById('root')!}
    >
      <div className="mx-auto flex flex-col gap-6 px-6 py-8 pb-6 font-AtkinsonHyperlegible font-bold md:gap-10 md:px-14 md:pb-16 md:pt-14">
        <div className="text-center">
          <h3 className="mb-2 text-2xl text-secondary-navy-800 md:mb-4 md:text-5xl">
            {mode === 'singlePlayer' ? 'You did it!' : ''}
            {mode === 'multiPlayer'
              ? multiPlayer.score.filter(score => score === maxScore).length > 1
                ? 'It’s a tie!'
                : `Player ${multiPlayer.score.indexOf(maxScore) + 1} Wins!`
              : ''}
          </h3>
          <p className="text- text-sm text-secondary-steel-400 md:text-lg">
            {mode === 'singlePlayer'
              ? 'Game over! Here’s how you got on…'
              : 'Game over! Here are the results…'}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          {mode === 'singlePlayer' && (
            <>
              <ResultRow>
                <ResultLabel>Time Elapsed</ResultLabel>
                <Result>{formatTime(singlePlayer.time)}</Result>
              </ResultRow>
              <ResultRow>
                <ResultLabel>Moves</ResultLabel>
                <Result>{singlePlayer.moves} Moves</Result>
              </ResultRow>
            </>
          )}
          {mode === 'multiPlayer' && (
            <>
              {convertScoreArray(multiPlayer.score).map(player => (
                <ResultRow
                  key={player.index}
                  isActive={player.score === maxScore}
                >
                  <ResultLabel
                    isActive={player.score === maxScore}
                  >{`Player ${player.index + 1} ${player.score === maxScore ? '(Winner!)' : ''}`}</ResultLabel>
                  <Result isActive={player.score === maxScore}>
                    {player.score} Pairs
                  </Result>
                </ResultRow>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            size="medium"
            variant="primary"
            onClick={gameRestart}
            className="md:p-4"
          >
            Restart
          </Button>
          <Button
            size="medium"
            variant="secondary"
            onClick={() => dispatch({ type: 'game/reseted' })}
            className="md:p-4"
          >
            Setup New Game
          </Button>
        </div>
      </div>
    </ReactModal>
  );
}

export default ModalFinish;
