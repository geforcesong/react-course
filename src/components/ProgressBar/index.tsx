import React from 'react';
import styles from './index.module.scss';

export interface Props {
  value: number | undefined;
}

const ProgressBar: React.FC<Props> = ({ value }) => {
  if (value == null) {
    return null;
  }
  const progressStyle = value
    ? ({ '--progress-value': value } as React.CSSProperties)
    : {};
  return (
    <div className={styles.progress}>
      <div className={styles['progress-indicator']} style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
