'use client';

import styles from '@/styles/components/ShowComments.module.scss';
import { useState } from 'react';

type Props = React.PropsWithChildren & {};

const ShowComments: React.FC<Props> = ({ children }) => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleComments = () => setShowComments(!showComments);

  const buttonTitle = showComments ? 'Hide Comments' : 'Show Comments';

  return (
    <div className={styles.container}>
      {showComments ? children : null}
      <button onClick={toggleComments} className={styles.button}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default ShowComments;
