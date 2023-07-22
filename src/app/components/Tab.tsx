import styles from '@/styles/components/Tab.module.scss';
import Link from 'next/link';

type Props = React.PropsWithChildren & {
  isSelected: boolean;
  onClick: () => void;
};

const Tab: React.FC<Props> = ({ children, isSelected, onClick }) => {
  return (
    <Link
      href={`/${children}`}
      onClick={onClick}
      className={`${styles.container} ${isSelected ? styles.active : ''}`}
    >
      {children}
    </Link>
  );
};

export default Tab;
