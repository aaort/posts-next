'use client';

import styles from '@/styles/components/ShowComments.module.scss';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Comments = dynamic(() => import('@/components/Comments'), {
  loading: () => <p>Loading...</p>,
});

type Props = {
  postId: number;
};

const ShowComments: React.FC<Props> = ({ postId }) => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleComments = () => setShowComments(!showComments);

  const buttonTitle = showComments ? 'Hide Comments' : 'Show Comments';

  return (
    <div className={styles.container}>
      {showComments ? <Comments postId={postId} /> : null}
      <button onClick={toggleComments} className={styles.button}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default ShowComments;
