import React from "react";
import Input from "./Input";
export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-white ">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-primary-100 text-white hover:bg-primary-200">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Discription" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
