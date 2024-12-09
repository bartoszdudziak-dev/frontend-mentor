import {
  type CommentVariant,
  type Reply,
  type CommentType,
  type CurrentUser,
  type CurrentReply,
  type SetCurrentReply,
} from '../../types/commonTypes';
import { createContext } from 'react';

type CommentsContextProps = {
  currentUser: CurrentUser;
  comments: CommentType[];
  addComment: (newComment: CommentType) => void;
  addReply: (commentId: number, newReply: Reply) => void;
  deleteComment: (variant: CommentVariant, id: number) => void;
  currentReplyOpen: CurrentReply;
  setCurrentReplyOpen: SetCurrentReply;
};

const CommentsContext = createContext<CommentsContextProps | undefined>(
  undefined,
);

export { CommentsContext };
