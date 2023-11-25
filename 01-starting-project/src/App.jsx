import {useState} from 'react';
import NewProject from './assets/Components/NewProject.jsx';
import NoProject from './assets/Components/NoProject.jsx';
import Sidebar from './components/Sidebar.jsx';
function App(){
  const[projectState,setProjectState]=useState({
    selectedProjectID:undefined,
    projects:[]
  });
function handleStartAddProject(){
  setProjectState(prevState=>{
    return{
      ...prevState,
      selectedProjectID:null,

    };
  });
}
return(
  <main className="h-screen my-8 flex gap-8">
    <projectsSidebar/>
    <NoProjectSelected/>
    
  </main>
)
}

export default App;
