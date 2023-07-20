type Tab = 'posts' | 'albums' | 'todos';

type Common = {
  id: number;
};

type Post = Common & {
  userId: number;
  title: string;
  body: string;
};

export type { Tab, Post };
