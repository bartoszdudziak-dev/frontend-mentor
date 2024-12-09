import { type CurrentUser, type Reply } from '../types/commonTypes';
import CommentItem from './CommentItem';

type RepliesProps = {
  replies: Reply[];
  currentUser: CurrentUser;
  commentRefId: number;
};

function Replies({ replies, currentUser, commentRefId }: RepliesProps) {
  return (
    <div className="flex">
      <div className="mr-4 h-full w-[2px] shrink-0 bg-neutral-light-gray md:mx-11"></div>
      <div className="flex flex-col gap-4">
        {replies.map(reply => (
          <CommentItem
            key={reply.id}
            item={reply}
            currentUser={currentUser}
            commentRefId={commentRefId}
          />
        ))}
      </div>
    </div>
  );
}

export default Replies;
