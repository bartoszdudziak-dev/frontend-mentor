import { useContext } from 'react';
import { CommentsContext } from './CommentsContext';

function useComments() {
  const context = useContext(CommentsContext);

  if (context === undefined)
    throw new Error(
      'CommentsContext was used outside of CommentsContextProvider',
    );

  return context;
}

export { useComments };
