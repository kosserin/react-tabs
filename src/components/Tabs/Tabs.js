import React, {useState} from 'react';
import data from '../../data';
import HighlightedTab from './HighlightedTab';
import TabNavigation from './TabNavigation';

import styles from './Tabs.module.css';

const Tabs = () => {

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const tabDisplayHandler = (id) => {
    const indexTab = data.findIndex(obj => obj.id === id);
    setHighlightedIndex(indexTab)
  }

  return (
    <div className={styles.tabs}>
        <TabNavigation data={data} onTabDisplay={tabDisplayHandler} activeTabId = {data[highlightedIndex].id} />
          <HighlightedTab activeTab={data[highlightedIndex]} />
    </div>
  )
}

export default Tabs