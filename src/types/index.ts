type Tab = 'posts' | 'albums' | 'todos';

type PostLimit = 10 | 20 | 50 | 100;

type Common = {
  id: number;
};

type Post = Common & {
  userId: number;
  title: string;
  body: string;
};

type Album = Common & {
  userId: number;
  title: string;
};

type Todo = Common & {
  userId: number;
  title: string;
  completed: boolean;
};

type Comment = Common & {
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type { Album, Comment, Post, PostLimit, Tab, Todo };
