import { type CommentType, type CurrentUser } from '../types/commonTypes';
import CommentItem from './CommentItem';
import Replies from './Replies';
import ReplyForm from './ReplyForm';

type CommentProps = { comment: CommentType; currentUser: CurrentUser };

function Comment({ comment, currentUser }: CommentProps) {
  const { replies, ...item } = comment;

  return (
    <>
      <CommentItem
        item={item}
        currentUser={currentUser}
        commentRefId={item.id}
      />
      {replies.length > 0 && (
        <Replies
          currentUser={currentUser}
          replies={replies}
          commentRefId={item.id}
        />
      )}
      <ReplyForm currentUser={currentUser} replyToId={item.id} />
    </>
  );
}

export default Comment;
