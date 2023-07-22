import styles from '@/styles/components/Post.module.scss';
import type { Post as PostType } from '@/types';
import Card from './Card';
import ShowComments from './ShowComments';
import Comments from './Comments';

type Props = {
  post: PostType;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.post_title}>{post.title}</p>
        <span>{post.body}</span>
      </div>
      <div className={styles.actions}>
        <ShowComments>
          {/* Passing <Comments /> as children to the <ShowComments />
           will allow as to render it as a server component and fill the slot
           when the parent component is rendered */}
          <Comments postId={post.id} />
        </ShowComments>
      </div>
    </Card>
  );
};

export default Post;
