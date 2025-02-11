import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({onStartAddProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-primary-100 text-white md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl  ">Your project</h2>
      <div>
        <Button className="px-4 py-2 text-xs md:text-base rounded-md bg-primary-950  hover:bg-primary-200 hover:text-stone-100" onClick={onStartAddProject}>
          +Add Project
        </Button>
      </div>
    </aside>
  );
}
