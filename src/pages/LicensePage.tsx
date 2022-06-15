import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { openAppDialog, closeAppDialog } from '../contexts/AppContext/actions';

const TestPopupComponent = () => {
  const { dispatch } = useContext(AppContext);

  const handleAccept = () => {
    dispatch(closeAppDialog());
  };

  return (
    <div>
      <div className='p-6 space-y-6'>this is my test component;</div>
      <div className='flex items-center p-6 space-x-2 rounded-b'>
        <button
          onClick={handleAccept}
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          I accept
        </button>
        <button
          type='button'
          className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
        >
          Decline
        </button>
      </div>
    </div>
  );
};

const LicensePage: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch(
      openAppDialog({
        title: 'This is my test',
        body: `With less than a month to go before the European Union enacts new
        consumer privacy laws for its citizens, companies around the world
        are updating their terms of service agreements to comply.`,
      }),
    );
  };

  const handleClick1 = () => {
    dispatch(
      openAppDialog({
        title: 'This is component test',
        component: TestPopupComponent,
      }),
    );
  };

  return (
    <div>
      License Page
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={handleClick1}>Click Component</button>
    </div>
  );
};
export default LicensePage;
