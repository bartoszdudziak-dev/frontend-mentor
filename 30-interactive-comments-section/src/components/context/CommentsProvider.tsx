import {
  type CommentVariant,
  type CommentType,
  type Data,
  type WithChildren,
  Reply,
  CurrentReply,
} from '../../types/commonTypes';
import { initialData } from '../../data/data';
import { CommentsContext } from './CommentsContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState } from 'react';

export function CommentsProvider({ children }: WithChildren) {
  const [data, setData] = useLocalStorage<Data>('comments', initialData);
  const [currentReplyOpen, setCurrentReplyOpen] = useState<CurrentReply>(null);

  // CREATE
  const addComment = (newComment: CommentType) => {
    setData(prevData => ({
      ...prevData,
      comments: [...prevData.comments, newComment],
    }));
  };

  const addReply = (commentId: number, newReply: Reply) => {
    console.log(commentId, newReply);
  };

  // DELETE (handles either comment and reply)
  const deleteComment = (variant: CommentVariant = 'comment', id: number) => {
    if (variant === 'comment') {
      setData(prevData => {
        return {
          ...prevData,
          comments: prevData.comments.filter(comment => comment.id !== id),
        };
      });
    }

    if (variant === 'reply') {
      setData(prevData => {
        return {
          ...prevData,
          comments: prevData.comments.map(comment => {
            return {
              ...comment,
              replies: comment.replies.filter(reply => reply.id !== id),
            };
          }),
        };
      });
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        currentUser: data.currentUser,
        comments: data.comments,
        currentReplyOpen,
        setCurrentReplyOpen,
        addComment,
        addReply,
        deleteComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
