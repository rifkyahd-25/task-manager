import { useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
   
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return; 
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
    <Modal ref={modal}  buttonCaption="Okay">
    <h2 className="text-xl font-bold text-primary-200 my-4">Invalid Input</h2>
        <p className="text-primary-100  mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-primary-100 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>

    </Modal >
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-white "  onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-primary-100 text-white hover:bg-primary-200"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Discription" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
    
  );
}
