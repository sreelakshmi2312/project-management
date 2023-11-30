import { useState } from 'react';
import NewProject from './assets/Components/NewProject.jsx';
import NoProject from './assets/Components/NoProject.jsx';
import Sidebar from './assets/Components/Sidebar.jsx';
import SelectedProject from './assets/Components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    const isConfirmed = window.confirm('Are you sure you want to delete this project?');
    if (isConfirmed) {
      const selectedProjectIdToDelete = projectState.selectedProjectId; // Store the ID before setting it to undefined
      setProjectState((prevState) => ({
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== selectedProjectIdToDelete),
      }));
    }
  }
  

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id!==id),
      }
    })
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject noProject={handleStartAddProject} projects={projectState.projects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar addProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
