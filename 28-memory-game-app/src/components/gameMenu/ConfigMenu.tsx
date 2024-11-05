import { MAX_PLAYERS } from '../../utils/constants';
import { type ClickButtonEvent } from '../../utils/types';
import {
  type Config,
  type Players,
  type Size,
  type Theme,
} from '../../services/context/game/types';
import Button from '../ui/Button';
import ConfigFieldset from './ConfigFieldset';
import { useGame } from '../../services/context/game/useGame';

function ConfigMenu() {
  const {
    state: { config },
    dispatch,
  } = useGame();

  const currentTheme = config.theme;
  const currentPlayers = config.players;
  const currentSize = config.size;

  function updateConfig(newConfig: Config) {
    dispatch({ type: 'config/updated', payload: newConfig });
  }

  function setTheme(e: ClickButtonEvent) {
    if (currentTheme === e.currentTarget.value) return;
    updateConfig({ ...config, theme: e.currentTarget.value as Theme });
  }

  function setPlayers(e: ClickButtonEvent) {
    if (currentPlayers === +e.currentTarget.value) return;
    updateConfig({
      ...config,
      players: +e.currentTarget.value as Players,
    });
  }

  function setSize(e: ClickButtonEvent) {
    if (currentSize === +e.currentTarget.value) return;
    updateConfig({ ...config, size: +e.currentTarget.value as Size });
  }

  return (
    <div className="flex flex-col gap-8">
      <ConfigFieldset legend="Select Theme" gap="gap-2.5 md:gap-7">
        <Button
          size="medium"
          variant="secondary"
          value="numbers"
          onClick={setTheme}
          isActive={currentTheme === 'numbers'}
          aria-pressed={currentTheme === 'numbers'}
        >
          Numbers
        </Button>
        <Button
          size="medium"
          variant="secondary"
          value="icons"
          onClick={setTheme}
          isActive={currentTheme === 'icons'}
          aria-pressed={currentTheme === 'icons'}
        >
          Icons
        </Button>
      </ConfigFieldset>
      <ConfigFieldset legend="Numbers of Players" gap="gap-2.5 md:gap-5">
        {Array.from({ length: MAX_PLAYERS }).map((_, i) => (
          <Button
            variant="secondary"
            size="medium"
            key={i + 1}
            value={i + 1}
            onClick={setPlayers}
            isActive={currentPlayers === i + 1}
            aria-pressed={currentPlayers === i + 1}
          >
            {i + 1}
          </Button>
        ))}
      </ConfigFieldset>
      <ConfigFieldset legend="Grid Size" gap="gap-2.5 md:gap-7">
        <Button
          size="medium"
          variant="secondary"
          value={4}
          onClick={setSize}
          isActive={currentSize === 4}
          aria-pressed={currentSize === 4}
        >
          4x4
        </Button>
        <Button
          size="medium"
          variant="secondary"
          value={6}
          onClick={setSize}
          isActive={currentSize === 6}
          aria-pressed={currentSize === 6}
        >
          6x6
        </Button>
      </ConfigFieldset>
    </div>
  );
}

export default ConfigMenu;
