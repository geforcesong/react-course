import { useRef, useContext } from 'react';
import Dialog from '../components/common/Dialog';
import { AppContext } from '../contexts/AppContext';
import { setUserName } from '../contexts/AppContext/actions';

type DialogHandle = React.ElementRef<typeof Dialog>;

const LicensePage: React.FC = () => {
  const dialogRef = useRef<DialogHandle>(null);
  const {
    state: { userName },
    dispatch,
  } = useContext(AppContext);

  const handleClick = () => {
    if (dialogRef) {
      dialogRef.current!.showModal();
    }
  };

  const handleClose = () => {
    dialogRef?.current!.closeModal();
    dispatch(setUserName('Andy'));
  };

  return (
    <div>
      License Page <h1>{userName}</h1>
      <button onClick={handleClick}>Click Me</button>
      <Dialog ref={dialogRef}>
        <div>
          <h2>Haha, I am show up!</h2>
          <button onClick={handleClose}>Close Me</button>
        </div>
      </Dialog>
    </div>
  );
};
export default LicensePage;
