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
    <div className="column gap_3 bg_color_3 border-radius-1 padding_2">
      {comments.map((comment) => (
        <p className="text_color_7" key={comment.id}>
          {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
