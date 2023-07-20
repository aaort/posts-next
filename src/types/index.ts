type Tab = 'posts' | 'albums' | 'todos';

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

export type { Album, Post, Tab };
