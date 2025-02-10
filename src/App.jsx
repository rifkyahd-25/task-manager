import { useState } from 'react'


import ProjectsSidebar from './components/ProjectsSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-primary-500 p-0 m-0'>
      <div>
      <main className=' h-screen p-8 '>
    <ProjectsSidebar/>
   </main>
      </div>

      

    </div>
   
  )
}

export default App
