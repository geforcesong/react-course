import React from 'react';
import styles from './index.module.scss';

export type AccordionItem = {
  id: string | number;
  header: string;
  component: JSX.Element | string;
  active: boolean;
};

export interface Props {
  items: AccordionItem[];
  onItemClicked?: (item: AccordionItem) => void;
}

const Accordion: React.FC<Props> = ({ items, onItemClicked }) => {
  const handleClick = (item: AccordionItem) => {
    onItemClicked?.(item);
  };

  if (!items?.length) {
    return null;
  }
  return (
    <div className={styles.container}>
      {items.map((item: AccordionItem) => {
        return (
          <div
            onClick={() => handleClick(item)}
            key={item.id}
            className={`${styles['item-wrapper']} ${
              item.active ? styles.active : ''
            }`}
          >
            <div className={styles.header}>{item.header}</div>
            <div className={styles['grid-wrapper']}>
              <div className={styles.inner}>{item.component}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
