import Post from '@/components/Post';
import '@/styles/utils/classes.scss';
import type { Post as PostType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async () => {
  const posts: PostType[] = await (await fetch(`${baseUrl}posts`)).json();

  return (
    <div className="column align_items_center gap_4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Page;
