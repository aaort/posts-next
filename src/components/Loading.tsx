'use client';

import styles from '@/styles/components/Loading.module.scss';
import colors from '@/styles/configs/variables.module.scss';
import { Oval } from 'react-loader-spinner';

type Props = {
  color?: React.CSSProperties['color'];
};

const Loading: React.FC<Props> = ({ color }) => {
  return (
    <Oval
      color={colors.primaryColor6}
      secondaryColor={colors.primaryColor6}
      wrapperClass={styles.container}
    />
  );
};

export default Loading;
