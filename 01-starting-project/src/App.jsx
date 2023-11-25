import {useState} from 'react';
import NewProject from './assets/Components/NewProject.jsx';
import NoProject from './assets/Components/NoProject.jsx';
import Sidebar from './assets/Components/Sidebar.jsx';


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
let content;
if(projectState.selectedProjectID===null){
  content=<NewProject/>
}else if(projectState.selectedProjectID===undefined){
  content=<NoProject noProject={handleStartAddProject}/>
  }
return(
  <main className="h-screen my-8 flex gap-8">
    
    <Sidebar addProject={handleStartAddProject}/>
    {content}
    
    
    
  </main>
)
}

export default App;
