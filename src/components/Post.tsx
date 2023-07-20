import { Post } from '@/types';
import Card from './Card';

import styles from '@/styles/components/Post.module.scss';

type Props = {
  post: Post;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.post_title}>{post.title}</p>
        <span>{post.body}</span>
      </div>
    </Card>
  );
};

export default Post;
