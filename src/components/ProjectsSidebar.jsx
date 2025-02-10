import React from 'react'

export default function ProjectsSidebar() {
  return (
    <aside className='w-1/3 px-8 py-16 bg-primary-100 text-white md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl  '>Your project</h2>
        <div>
            <button className='px-4 py-2 text-xs md:text-base rounded-md bg-primary-950  hover:bg-primary-200 hover:text-stone-100'>
                +Add Project
            </button>
        </div>
    </aside>
  )
}
