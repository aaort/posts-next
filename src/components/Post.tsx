import styles from '@/styles/components/Post.module.scss';
import type { Post as PostType } from '@/types';
import Card from './Card';

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
        <button className={styles.action}>Show Comments</button>
        <button className={styles.action}>Edit</button>
      </div>
    </Card>
  );
};

export default Post;
