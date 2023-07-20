import styles from '@/styles/components/Card.module.scss';

type Props = React.PropsWithChildren;

const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
