import React from 'react';
import ManageTasks from './ManageTasks';

const formattedDate = (dueDate) => new Date(dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate(project.dueDate)}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <ManageTasks onAdd={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}
