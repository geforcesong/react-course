import { useRef, useContext, useEffect } from 'react';
import Dialog from '../Dialog';
import { AppContext } from '../../../contexts/AppContext';
import { closeAppDialog } from '../../../contexts/AppContext/actions';

type DialogHandle = React.ElementRef<typeof Dialog>;

const AppDialog: React.FC = () => {
  const dialogRef = useRef<DialogHandle>(null);
  const {
    state: { dialogStatus },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (dialogStatus === true) {
      dialogRef?.current!.showModal();
    }
  }, [dialogStatus]);

  const closeClick = () => {
    dialogRef.current!.closeModal();
  };

  const handleClosed = () => {
    dispatch(closeAppDialog());
  };

  return (
    <Dialog ref={dialogRef} onClosed={handleClosed}>
      <div className='relative w-full max-w-2xl h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
            <h3 className='text-xl text-gray-900 dark:text-white'>
              Terms of Service
            </h3>
            <button
              onClick={closeClick}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'
            >
              <i className='icon-close' />
            </button>
          </div>
          <div className='p-6 space-y-6'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
            <button
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
      </div>
    </Dialog>
  );
};

export default AppDialog;
