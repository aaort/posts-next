'use client';

import styles from '@/styles/components/ShowComments.module.scss';
import { useState } from 'react';

type Props = React.PropsWithChildren & {};

// ShowComments component includes button for showing/hiding comments
// as well as <Comments /> components itself, which's taken as props
// in order to be able to render it as a Server Component which
// would not be possible otherwise, since Server Components cannot be
// imported in the Client Components modules. read more: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
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
