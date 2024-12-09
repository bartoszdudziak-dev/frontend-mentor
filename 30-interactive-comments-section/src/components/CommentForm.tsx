import { type CommentType, type User } from '../types/commonTypes';
import { useComments } from './context/useComments';

import Avatar from './ui/Avatar';
import Button from './ui/Button';
import Textarea from './ui/Textarea';

import { useState } from 'react';

type CommentFormProps = { currentUser: User };

function CommentForm({ currentUser }: CommentFormProps) {
  const { addComment } = useComments();
  const [comment, setComment] = useState('');

  const isInputValid = comment.length >= 10;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isInputValid) return;

    const newComment: CommentType = {
      id: Math.random(),
      createdAt: new Date().toLocaleDateString(),
      content: comment,
      replies: [],
      score: 0,
      user: { username: currentUser.username, image: { ...currentUser.image } },
    };

    addComment(newComment);
    setComment('');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-lg bg-neutral-white p-4"
    >
      <Textarea
        value={comment}
        setValue={setComment}
        id="commentForm"
        name="commentForm"
      />
      <div className="flex items-center justify-between">
        <Avatar
          src={currentUser.image.webp || currentUser.image.png}
          alt={`Avatar of ${currentUser.username}`}
        />
        <Button type="submit" disabled={!isInputValid}>
          SEND
        </Button>
      </div>
    </form>
  );
}

export default CommentForm;
