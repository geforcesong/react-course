import { useRef, useContext, useEffect } from 'react';
import Dialog from '../Dialog';
import { AppContext } from '../../../contexts/AppContext';
import { closeAppDialog } from '../../../contexts/AppContext/actions';

type DialogHandle = React.ElementRef<typeof Dialog>;

const AppDialog: React.FC = () => {
  const dialogRef = useRef<DialogHandle>(null);
  const {
    state: { dialogProps },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (dialogProps.isOpen === true) {
      dialogRef?.current!.showModal();
    } else if (dialogProps.isOpen === false) {
      dialogRef.current!.closeModal();
    }
  }, [dialogProps.isOpen]);

  const closeClick = () => {
    dispatch(closeAppDialog());
  };

  const CustomComponent = dialogProps.component;

  return (
    <Dialog ref={dialogRef}>
      {dialogProps.isOpen && (
        <div className='relative w-full max-w-2xl h-full md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
              <h3 className='text-xl text-gray-900 dark:text-white'>
                {dialogProps.title}
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
            {dialogProps.body && (
              <div className='p-6 space-y-6'>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  {dialogProps.body}
                </p>
              </div>
            )}
            {CustomComponent ? <CustomComponent /> : null}
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default AppDialog;
