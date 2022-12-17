import React from 'react';
import styles from './index.module.scss';

export interface TabItem {
  id: string | number;
  component: JSX.Element | string;
  active: boolean;
  disabled: boolean;
  content?: JSX.Element;
}

export interface Props {
  items: Array<TabItem>;
  onTabChanged?: (item: TabItem) => void;
}

const SimpleTab: React.FC<Props> = ({ items, onTabChanged }) => {
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

  const activeIndex = items.findIndex((item) => item.active);
  const constainerStyle = {
    '--index': activeIndex < 0 ? 0 : activeIndex,
  } as React.CSSProperties;

  return (
    <>
      <div className={styles['tab-container']} style={constainerStyle}>
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
            </div>
          );
        })}
        <div className={styles.indicator}></div>
      </div>
      {items.map((item: TabItem) => {
        if (!item.content || !item.active) {
          return null;
        }
        return (
          <div key={item.id} className={styles['content-container']}>
            {item.content}
          </div>
        );
      })}
    </>
  );
};

export default SimpleTab;
