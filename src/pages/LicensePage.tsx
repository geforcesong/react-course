import { useRef } from 'react';
import Dialog from '../components/common/Dialog';

type DialogHandle = React.ElementRef<typeof Dialog>;

const LicensePage: React.FC = () => {
  const dialogRef = useRef<DialogHandle>(null);

  const handleClick = () => {
    if (dialogRef) {
      dialogRef.current!.showModal();
    }
  };

  const handleClose = () => {
    dialogRef?.current!.closeModal();
  };

  return (
    <div>
      License Page
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
