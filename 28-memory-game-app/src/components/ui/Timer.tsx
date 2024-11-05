import { useEffect } from 'react';
import { useGame } from '../../services/context/game/useGame';
import { formatTime } from '../../utils/helpers';

function Timer() {
  const {
    state: { singlePlayer },
    dispatch,
  } = useGame();

  useEffect(() => {
    const timeout = setInterval(() => {
      dispatch({ type: 'timer/ticked' });
    }, 1000);

    return () => clearInterval(timeout);
  }, [dispatch]);

  if (singlePlayer) return <>{formatTime(singlePlayer.time)}</>;

  return null;
}

export default Timer;
