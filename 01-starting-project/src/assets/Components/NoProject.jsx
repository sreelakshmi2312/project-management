import noProjectImage from '../no-projects.png';
import Button from './Button';

export default function NoProject({noProject}){
    return ( <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-8">
        <Button className="text-white bg-black hover:bg-gray-600 px-4 py-2 rounded-md" onClick={noProject}> Create new project</Button>
        </p>
    </div> )
}