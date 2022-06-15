import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { openAppDialog } from '../contexts/AppContext/actions';

const LicensePage: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch(openAppDialog());
  };

  return (
    <div>
      License Page
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default LicensePage;
