import {
  type Reply,
  type Comment,
  type CurrentUser,
} from '../types/commonTypes';

import ReplyIcon from '../icons/icon-reply.svg?react';
import DeleteIcon from '../icons/icon-delete.svg?react';
import EditIcon from '../icons/icon-edit.svg?react';

import Avatar from './ui/Avatar';
import ActionButton from './ui/ActionButton';
import CommentScore from './CommentScore';
import OwnerIndicator from './OwnerIndicator';
import { useComments } from './context/useComments';

// Type Guard
function isReply(item: Comment | Reply): item is Reply {
  return (item as Reply).replyingTo !== undefined;
}

type CommentItemProps = {
  item: Comment | Reply;
  currentUser: CurrentUser;
  commentRefId: number;
};

function CommentItem({ item, currentUser, commentRefId }: CommentItemProps) {
  const { deleteComment, setCurrentReplyOpen } = useComments();

  const { content, user, createdAt, score, id } = item;

  const isLiked = currentUser.likes.includes(id);
  const isDisiked = currentUser.dislikes.includes(id);
  const isOwner = currentUser.username === user.username;

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-neutral-white p-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={user.image.webp || user.image.png}
          alt={`Avatar of ${user.username}`}
        />

        <div className="flex items-center gap-2">
          <span className="font-medium text-neutral-dark-blue">
            {user.username}
          </span>
          {isOwner && <OwnerIndicator />}
        </div>

        <span className="text-neutral-grayish-blue">{createdAt}</span>
      </div>

      <p className="text-neutral-grayish-blue">
        {isReply(item) && (
          <span className="font-bold text-primary-moderate-blue">
            @{item.replyingTo}{' '}
          </span>
        )}
        {content}
      </p>

      <div className="flex items-center justify-between">
        <CommentScore
          score={score}
          commentId={id}
          isOwner={isOwner}
          isDisliked={isDisiked}
          isLiked={isLiked}
        />

        {isOwner ? (
          <div className="flex gap-4">
            <ActionButton
              variant="danger"
              text="Delete"
              icon={<DeleteIcon />}
              onClick={() =>
                deleteComment(isReply(item) ? 'reply' : 'comment', id)
              }
            />
            <ActionButton variant="info" text="Edit" icon={<EditIcon />} />
          </div>
        ) : (
          <ActionButton
            variant="info"
            text="Reply"
            icon={<ReplyIcon />}
            onClick={() => setCurrentReplyOpen(commentRefId)}
          />
        )}
      </div>
    </div>
  );
}

export default CommentItem;
