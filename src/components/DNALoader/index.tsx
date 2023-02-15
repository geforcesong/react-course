import React, { useState } from 'react';
import styles from './index.module.css';

interface Props {
  pairCount?: number;
}

const COLORS = [
  'hsl(44, 98%, 60%)',
  'hsl(197, 50%, 44%)',
  'hsl(300, 100%, 100%)',
  'hsl(331, 76%, 50%)',
];

const DNALoader: React.FC<Props> = ({ pairCount = 13 }) => {
  const [items] = useState(() => Array.from(Array(pairCount).keys()));

  const containerStyle = { '--total': 13 } as React.CSSProperties;
  return (
    <div className={styles.container}>
      <div className={styles.dna} style={containerStyle}>
        {items.map((item) => {
          const delay = Math.sin(
            (Math.PI / 180) * 45 * ((item + 1) / pairCount),
          );
          const itemStyle = {
            '--index': item + 1,
            '--delay': `calc((${delay} * var(--speed)) * -1s)`,
          } as React.CSSProperties;

          const nodeStyle1 = {
            '--bg': COLORS[Math.floor(Math.random() * COLORS.length)],
          } as React.CSSProperties;

          const nodeStyle2 = {
            '--bg': COLORS[Math.floor(Math.random() * COLORS.length)],
          } as React.CSSProperties;

          return (
            <div className={styles.strand} style={itemStyle} key={item}>
              <div className={styles['strand__node']} style={nodeStyle1}></div>
              <div className={styles['strand__node']} style={nodeStyle2}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DNALoader;
