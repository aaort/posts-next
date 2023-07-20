import styles from '@/styles/components/TabBar.module.scss';
import type { Tab as TabType } from '@/types';
import Tab from './Tab';

const tabs: TabType[] = ['posts', 'albums', 'todos'];

const TabBar: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <Tab key={tab}>{tab}</Tab>
      ))}
    </div>
  );
};

export default TabBar;
