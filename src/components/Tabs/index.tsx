import React from 'react';
import styles from './index.module.scss';
import ProgressBar from '../ProgressBar';

export interface TabItem {
  id: string | number;
  component: JSX.Element | string;
  active: boolean;
  disabled: boolean;
  progressValue?: number;
}

export interface Props {
  items: Array<TabItem>;
  onTabChanged?: (item: TabItem) => void;
}

const Tabs: React.FC<Props> = ({ items, onTabChanged }) => {
  const handleClick = (item: TabItem) => {
    if (!items) {
      return;
    }
    const activeItem = items.find((item: TabItem) => item.active);
    if (activeItem === item) {
      return;
    }
    onTabChanged?.(item);
  };

  if (!items?.length) {
    return null;
  }

  return (
    <div className={styles['tab-container']}>
      {items.map((item: TabItem) => {
        return (
          <div
            key={item.id}
            className={
              item.active
                ? `${styles['tab-item-container']} ${styles.active}`
                : styles['tab-item-container']
            }
            onClick={() => handleClick(item)}
          >
            {item.component}

            {<ProgressBar value={item.progressValue} />}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
