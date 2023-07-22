import styles from '@/styles/components/Comments.module.scss';
import '@/styles/utils/classes.scss';
import type { Comment } from '@/types';

type Props = {
  postId: number;
};

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Comments: React.FC<Props> = async ({ postId }) => {
  const comments: Comment[] = await (
    await fetch(`${baseUrl}posts/${postId}/comments`)
  ).json();

  if (!comments || !comments.length) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="column gap_3 bg_color_3 border_radius_1 padding_2">
      {comments.map((comment) => (
        <p className="textC_color_7" key={comment.id}>
          <span className={styles.username}>{comment.name}</span>
          <br />
          <br />
          {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
