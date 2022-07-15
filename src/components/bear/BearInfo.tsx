import React from 'react';
import shallow from 'zustand/shallow';
import useBearStore from '../../store/bear.store';
import { Button } from '../common/Button';

export const BearInfo: React.FC = () => {
  //   const bears = useBearStore((state) => state.bears);
  //   const bearKind = useBearStore((state) => state.bearKind);
  const { bears, bearKind } = useBearStore(
    (state) => ({ bearKind: state.bearKind, bears: state.bears }),
    shallow,
  );

  console.count('BearInfo render count');

  const increasePopulation = useBearStore((state) => state.increase);
  const changeType = useBearStore((state) => state.changeType);
  return (
    <div>
      <h1>
        {bears} {bearKind} bears around here ...
      </h1>
      <div>
        <Button
          text='Add Bear'
          className='mr-2'
          onClick={() => increasePopulation(1)}
        />
        <Button
          text='Change Type'
          color='purple'
          onClick={() => changeType()}
        />
      </div>
    </div>
  );
};
