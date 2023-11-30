import React, { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() !== '') {
      onAdd(enteredTask);
      setEnteredTask('');
    }
  }
  
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
      <button className="text-gray-500 hover:text-black" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
