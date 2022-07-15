import { useRef } from 'react';
import useBearStore from '../../store/bear.store';
import { Button } from '../common/Button';

export const BearDetail: React.FC = () => {
  const description = useBearStore((state) => state.description);
  const bodyParts = useBearStore((state) => state.bodyParts);
  const setDescription = useBearStore((state) => state.setDescription);
  const addBodyPart = useBearStore((state) => state.addBodyPart);
  const inputRef = useRef<HTMLInputElement>(null);

  console.count('BearDetail render count');

  const handleAddBodyPart = () => {
    if (inputRef.current?.value) {
      addBodyPart(inputRef.current?.value);
    }
    inputRef.current!.value = '';
  };

  return (
    <div>
      Bear Details: {description}
      <div>
        <Button
          text='Update Description'
          className='mr-2'
          onClick={() => setDescription(description + '1')}
        />
      </div>
      <div>
        <input type='text' ref={inputRef} />
        <Button
          text='Add Body Part'
          className='mr-2'
          onClick={() => handleAddBodyPart()}
        />
      </div>
      <div>
        {bodyParts.map((part) => {
          return <div key={part}>{part}</div>;
        })}
      </div>
    </div>
  );
};
