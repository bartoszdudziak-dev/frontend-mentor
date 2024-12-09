import { type WithChildren } from '../utils/commonTypes';
import PlusIcon from '../icons/icon-plus.svg?react';
import MinusIcon from '../icons/icon-minus.svg?react';

type CommentScoreProps = {
  score: number;
  commentId: number;
  isLiked: boolean;
  isDisliked: boolean;
  isOwner: boolean;
};
type ScoreButtonProps = {
  isActive?: boolean;
  isOwner: boolean;
} & WithChildren;

function ScoreButton({
  children,
  isActive = false,
  isOwner,
}: ScoreButtonProps) {
  return (
    <button
      disabled={isActive || isOwner}
      className={`${isActive ? 'text-primary-moderate-blue' : 'text-primary-light-grayish-blue hover:text-primary-moderate-blue'} min-h-4 transition-colors duration-300 disabled:pointer-events-none`}
    >
      {children}
    </button>
  );
}

function CommentScore({
  score,
  commentId,
  isLiked,
  isDisliked,
  isOwner,
}: CommentScoreProps) {
  return (
    <div className="flex w-28 items-center justify-between rounded-lg bg-neutral-very-light-gray px-3.5 py-2.5">
      <ScoreButton isActive={isLiked} isOwner={isOwner}>
        <PlusIcon />
      </ScoreButton>
      <span className="font-medium text-primary-moderate-blue">{score}</span>
      <ScoreButton isActive={isDisliked} isOwner={isOwner}>
        <MinusIcon />
      </ScoreButton>
    </div>
  );
}

export default CommentScore;
