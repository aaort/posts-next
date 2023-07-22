'use client';
import styles from '@/styles/components/TabBar.module.scss';
import type { Tab as TabType } from '@/types';
import { useState } from 'react';
import Tab from './Tab';

const tabs: TabType[] = ['posts', 'albums', 'todos'];

const TabBar: React.FC<{}> = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('posts');

  const handleTabChange = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <ul className={styles.container}>
      {tabs.map((tab) => (
        <li key={tab}>
          <Tab
            onClick={() => handleTabChange(tab)}
            isSelected={tab === selectedTab}
          >
            {tab}
          </Tab>
        </li>
      ))}
    </ul>
  );
};

export default TabBar;
