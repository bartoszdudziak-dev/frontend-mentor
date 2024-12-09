import Comment from './Comment';
import CommentForm from './CommentForm';
import { useComments } from './context/useComments';

function CommentsSection() {
  const { comments, currentUser } = useComments();

  return (
    <section className="grid gap-4">
      {comments.map(comment => (
        <Comment comment={comment} currentUser={currentUser} key={comment.id} />
      ))}
      <CommentForm currentUser={currentUser} />
    </section>
  );
}

export default CommentsSection;
