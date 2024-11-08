import ReactModal from 'react-modal';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo';
import { useState } from 'react';
import { useMobile } from '../../../hooks/useLayout';
import { useGame } from '../../../services/context/game/useGame';
import { modalStyle } from '../../../utils/constants';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const { dispatch, gameRestart } = useGame();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <header className="flex items-center justify-between">
        <Logo className="max-w-24 md:max-w-36" />
        <Button
          size="small"
          variant="primary"
          className="max-w-20 md:hidden"
          onClick={openModal}
        >
          Menu
        </Button>
        <div className="hidden md:flex md:gap-4">
          <Button
            size="small"
            variant="primary"
            className="max-w-fit"
            onClick={gameRestart}
          >
            Restart
          </Button>
          <Button
            size="small"
            variant="secondary"
            className="max-w-fit"
            onClick={() => dispatch({ type: 'game/reseted' })}
          >
            New Game
          </Button>
        </div>
      </header>

      <ReactModal
        isOpen={isOpen && isMobile}
        style={{
          ...modalStyle,
          content: { ...modalStyle.content, maxWidth: '500px' },
        }}
        appElement={document.getElementById('root')!}
        onRequestClose={closeModal}
        onAfterOpen={() => dispatch({ type: 'game/paused', payload: true })}
        onAfterClose={() => dispatch({ type: 'game/paused', payload: false })}
      >
        <div className="flex flex-col gap-4 p-6 font-AtkinsonHyperlegible">
          <Button
            size="large"
            variant="primary"
            onClick={() => {
              gameRestart();
              closeModal();
            }}
          >
            Restart
          </Button>
          <Button
            size="large"
            variant="secondary"
            onClick={() => dispatch({ type: 'game/reseted' })}
          >
            New Game
          </Button>
          <Button size="large" variant="secondary" onClick={closeModal}>
            Reasume game
          </Button>
        </div>
      </ReactModal>
    </>
  );
}

export default Header;
