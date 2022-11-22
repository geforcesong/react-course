import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

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
  const [tabItems, setTabItems] = useState<Array<TabItem> | null>(null);

  useEffect(() => {
    if (items) {
      setTabItems(items);
    }
  }, [items]);

  const handleClick = (item: TabItem) => {
    if (!tabItems) {
      return;
    }
    const activeItem = tabItems.find((item: TabItem) => item.active);
    if (activeItem === item) {
      return;
    }
    setTabItems(
      tabItems.map((ci: TabItem) => ({
        ...ci,
        active: ci === item,
      })),
    );
    onTabChanged?.(item);
  };

  if (!tabItems?.length) {
    return null;
  }

  return (
    <div className={styles['tab-container']}>
      {tabItems.map((item: TabItem) => {
        const progressStyle = item.progressValue
          ? ({ '--progress-value': item.progressValue } as React.CSSProperties)
          : null;
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

            {progressStyle && (
              <div className={styles.progress}>
                <div
                  className={styles['progress-indicator']}
                  style={progressStyle}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
