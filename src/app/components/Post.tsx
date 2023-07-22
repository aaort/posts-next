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
        <ShowComments postId={post.id}>
          <Comments postId={post.id} />
        </ShowComments>
      </div>
    </Card>
  );
};

export default Post;
