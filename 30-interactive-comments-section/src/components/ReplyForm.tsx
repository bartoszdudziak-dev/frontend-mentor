import { type User } from '../types/commonTypes';
import { useComments } from './context/useComments';

import Avatar from './ui/Avatar';
import Button from './ui/Button';
import Textarea from './ui/Textarea';

import { useState } from 'react';

type ReplyFormProps = {
  currentUser: User;
  replyToId: number;
};

function ReplyForm({ currentUser, replyToId }: ReplyFormProps) {
  const [comment, setComment] = useState('');
  const { currentReplyOpen } = useComments();

  const isOpen = replyToId === currentReplyOpen;

  if (!isOpen) return null;

  const isInputValid = comment.length >= 10;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!isInputValid) return;

    // const newComment: CommentType = {
    //   id: Math.random(),
    //   createdAt: new Date().toLocaleDateString(),
    //   content: comment,
    //   replies: [],
    //   score: 0,
    //   user: { username: currentUser.username, image: { ...currentUser.image } },
    // };

    // addComment(newComment);
    // setComment('');

    console.log('replysubmit');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-lg bg-neutral-white p-4"
    >
      <Textarea
        value={comment}
        setValue={setComment}
        id="replyForm"
        name="replyForm"
      />
      <div className="flex items-center justify-between">
        <Avatar
          src={currentUser.image.webp || currentUser.image.png}
          alt={`Avatar of ${currentUser.username}`}
        />
        <Button type="submit" disabled={!isInputValid}>
          REPLY
        </Button>
      </div>
    </form>
  );
}

export default ReplyForm;
