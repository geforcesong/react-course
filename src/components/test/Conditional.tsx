import React from 'react';

type ConditionalProps = {
  count: number;
};

export const Conditional: React.FC<ConditionalProps> = ({ count }) => {
  return (
    <>
      {(() => {
        if (!count) {
          return <div>没有结果</div>;
        } else if (count === 1) {
          return <div>只有一个结果</div>;
        } else {
          return <div>有多个结果</div>;
        }
      })()}
    </>
  );
};
