import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-primary-500 p-0 m-0">
      <main className=" h-screen p-8 ">
        <ProjectsSidebar />
        <NewProject />
      </main>
    </div>
  );
}

export default App;
