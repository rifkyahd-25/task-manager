import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects,  onSelectProject, selectedProjectId }) {
  return ( 
    <aside className="w-1/3 px-8 py-16 bg-primary-100 text-white md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl  ">Your project</h2>
      <div>
        <Button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-primary-950  hover:bg-primary-200 hover:text-stone-100"
          onClick={onStartAddProject}
        >
          +Add Project
        </Button>
      </div>



      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
