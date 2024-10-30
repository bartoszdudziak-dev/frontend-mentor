import { useLockBodyScroll } from '@custom-react-hooks/use-lock-body-scroll';
import {
  cloneElement,
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';

type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children }: ModalProps) {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('Window Modal was used outside of ModalContextProvider');

  const { isOpen } = context;

  if (!isOpen) return null;

  return createPortal(
    <ReactFocusLock>
      <div className="fixed inset-0 z-50 bg-black-400/50 backdrop-blur-sm">
        <div className="fixed bottom-0 left-0 w-full overflow-hidden rounded-t-lg md:bottom-auto md:left-1/2 md:top-1/2 md:max-w-[688px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-lg">
          {children}
        </div>
      </div>
    </ReactFocusLock>,
    document.body,
  );
}

function Open({
  children,
  onOpen,
}: {
  children: ReactElement;
  onOpen?: () => void;
}) {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('Open Modal was used outside of ModalContextProvider');

  const { openModal } = context;

  return cloneElement(children, {
    onClick: () => {
      openModal();
      onOpen?.();
    },
  });
}

function Close({
  children,
  onClose,
}: {
  children: ReactElement;
  onClose?: () => void;
}) {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('Open Modal was used outside of ModalContextProvider');

  const { closeModal } = context;

  return cloneElement(children, {
    onClick: () => {
      closeModal();
      onClose?.();
    },
  });
}

Modal.Window = Window;
Modal.Open = Open;
Modal.Close = Close;

export default Modal;
