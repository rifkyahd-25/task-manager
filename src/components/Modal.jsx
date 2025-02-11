import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      } else {
        console.error("dialog.current is not set yet.");
      }
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-purple-600/60 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
