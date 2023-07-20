'use client';

import { Oval } from 'react-loader-spinner';
import styles from '@/styles/components/Loading.module.scss';

type Props = {
  color?: React.CSSProperties['color'];
};

const Loading: React.FC<Props> = ({ color }) => {
  return <Oval color={color} wrapperClass={styles.container} />;
};

export default Loading;
