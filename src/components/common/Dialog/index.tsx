import React, { useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';

type DialogProps = {
  onClosed?: () => void;
  backDropClicked?: () => void;
  children: React.ReactNode;
};

type DialogHandles = {
  show: () => void;
  showModal: () => void;
  closeModal: () => void;
};

const Dialog = React.forwardRef<DialogHandles, DialogProps>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    dialogRef.current!.setAttribute('closing', '');
    dialogRef.current!.addEventListener(
      'animationend',
      () => {
        dialogRef.current!.removeAttribute('closing');
        props?.onClosed?.();
        dialogRef.current!.close();
      },
      { once: true },
    );
  };

  const showModal = () => {
    dialogRef.current!.showModal();
  };
  const show = () => {
    dialogRef.current!.show();
  };

  useImperativeHandle(ref, () => ({
    show,
    showModal,
    closeModal,
  }));

  const handleClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target?.nodeName === 'DIALOG') {
      props?.backDropClicked?.();
    }
  };

  return (
    <dialog
      className={styles['my-dialog']}
      ref={dialogRef}
      onClick={handleClick}
    >
      <div>{props.children}</div>
    </dialog>
  );
});
Dialog.displayName = 'Dialog';

export default Dialog;
