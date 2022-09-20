import { useCallback, useState } from 'react';
import { useIntegration } from '../../hooks/useIntegration';
import Child from './child';

const Child1: React.FC = () => {
  console.count('Child1 Page renders');
  return (
    <div>
      <h1>I am child1 Page</h1>
    </div>
  );
};

const ParentChildTest: React.FC = () => {
  const [count, setCount] = useState(0);
  const myFunction = useCallback(() => {
    console.log('fired my own event');
  }, []);

  useIntegration('MyOwnEvent', myFunction);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const Child2: React.FC = () => {
    console.count('Child2 Page renders');
    return (
      <div>
        <h1>I am child2 Page</h1>
      </div>
    );
  };

  console.count('Parent Renders');
  return (
    <div>
      <h1>Parent Child Test Page</h1>
      <button onClick={handleClick}>Plus {count}</button>
      <Child />
      <Child1 />
      <Child2 />
    </div>
  );
};
export default ParentChildTest;
