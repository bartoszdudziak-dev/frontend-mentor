import { ReactNode } from 'react';

export type Data = {
  currentUser: CurrentUser;
  comments: CommentType[];
};

export type CommentType = Comment & {
  replies: Reply[] | [];
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
};

export type CurrentUser = User & { likes: number[]; dislikes: number[] };

export type User = {
  image: Avatar;
  username: string;
};

type Avatar = {
  png: string;
  webp: string;
};

export type Reply = Comment & {
  replyingTo: string;
};

export type WithChildren = {
  children: ReactNode;
};

export type CommentVariant = 'comment' | 'reply';

export type CurrentReply = number | null;
export type SetCurrentReply = React.Dispatch<
  React.SetStateAction<number | null>
>;
