import styles from '@/styles/components/Tab.module.scss';

type Props = React.PropsWithChildren;

const Tab: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Tab;
