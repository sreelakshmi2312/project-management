import {useState} from 'react';
import NewProject from './assets/Components/NewProject.jsx';
import NoProject from './assets/Components/NoProject.jsx';
import Sidebar from './assets/Components/Sidebar.jsx';
import SelectedProject from './assets/Components/SelectedProject.jsx';


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
function handleSelectProject(id){
  setProjectState((prevState)=>{
    return {
      ...prevState,
      selectedProjectId:id,
    };
  });
}
function handleCancelAddProject(){
  setProjectState((prevState)=>{
    return{
      ...prevState,
      selectedProjectID:undefined,
    };
  });

}
function handleAddProject(projectData){
  setProjectState((prevState)=>{
     const projectId=Math.random();
     const newProject={
      ...projectData,
      id:projectId,
     };
     return{
      ...prevState,
      selectedProjectID:undefined,
      projects:[...prevState.projects,newProject]
     };
  });
}
console.log(projectState);
const selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProjectID);
let content=<SelectedProject project={selectedProject}/>
if(projectState.selectedProjectID===null){
  content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
}else if(projectState.selectedProjectID===undefined){
  content=<NoProject noProject={handleStartAddProject} projects={projectState.projects}/>
  }
return(
  <main className="h-screen my-8 flex gap-8">
    
    <Sidebar addProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject}/>
    {content}
    
    
    
  </main>
)
}

export default App;
