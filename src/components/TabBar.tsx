import { Tab } from '@/types';
import styles from '@/styles/components/TabBar.module.scss';

const tabs: Tab[] = ['posts', 'albums', 'todos'];

const TabBar: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <span key={tab}>{tab}</span>
      ))}
    </div>
  );
};

export default TabBar;
