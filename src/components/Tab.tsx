import styles from '@/styles/components/Tab.module.scss';

type Props = React.PropsWithChildren & {
  isSelected: boolean;
  onClick: () => void;
};

const Tab: React.FC<Props> = ({ children, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${
        isSelected ? styles.selected_container : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
