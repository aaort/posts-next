import Post from '@/components/Post';
import '@/styles/utils/classes.scss';
import type { Post as PostType } from '@/types';

const Page = async () => {
  const posts: PostType[] = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json();

  return (
    <div className="column align_items_center gap_4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Page;
