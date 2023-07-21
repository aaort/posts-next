import Post from '@/components/Post';
import '@/styles/utils/classes.scss';
import type { Post as PostType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async () => {
  const posts: PostType[] = await (
    await fetch(`${baseUrl}posts?_limit=10`)
  ).json();

  // Uncomment to see how Next.js uses error.tsx component, in case of promise reject
  // error.tsx components will replace page.tsx component, while loading.tsx component
  // will be rendered in the meantime
  // await new Promise((resolve, reject) => {
  //   setTimeout(reject, 2000);
  //   console.log('doing');
  // });

  return (
    <div className="column align_items_center gap_4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Page;
