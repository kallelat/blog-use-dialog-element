import { FunctionComponent, useEffect, useRef } from "react";
import "./dialog.css";

interface DialogProps {
  // controls the visibility of the dialog
  open: boolean;

  // a title
  title: string;

  // a passed down method to signal parent of modal closure
  onClose: () => void;
}

const Dialog: FunctionComponent<DialogProps> = ({
  open,
  title,
  children,
  onClose,
}) => {
  // a handle to our <dialog> element
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        // when the "open" prop is toggled to true we invoke showModal() method.
        (dialogRef.current as any).showModal();
      } else {
        // force closure
        // trigger cancel evesnt, which will automatically close the modal
        (dialogRef.current as any).close();
      }
    }
  }, [open]);

  const handleClose = () => {
    if (dialogRef.current) {
      // trigger cancel event, which will automatically close the modal
      (dialogRef.current as any).close();
    }

    // signal parent
    onClose();
  };

  return (
    <dialog ref={dialogRef}>
      <header>{title}</header>
      <section>{children}</section>
      <menu>
        <button value="Close" onClick={handleClose}>
          Close
        </button>
      </menu>
    </dialog>
  );
};

export default Dialog;
