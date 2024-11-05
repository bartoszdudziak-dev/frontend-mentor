import { useGame } from '../../services/context/game/useGame';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import ConfigMenu from './ConfigMenu';

function GameSetup() {
  const { dispatch } = useGame();

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <section className="m-6 w-full max-w-[654px]">
        <Logo className="mx-auto mb-12 w-full max-w-[122px] fill-secondary-white-50 md:mb-20 md:max-w-[153px]" />
        <div className="space-y-8 rounded-lg bg-secondary-white-50 p-6 md:rounded-2xl md:p-14">
          <ConfigMenu />
          <Button
            variant="primary"
            size="large"
            onClick={() => dispatch({ type: 'game/started' })}
          >
            Start Game
          </Button>
        </div>
      </section>
    </div>
  );
}

export default GameSetup;
