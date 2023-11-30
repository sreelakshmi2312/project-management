import NewTask from "./NewTask";

export default function ManageTasks({ tasks, onAdd, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-black font-bold text-2xl">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-gray-500">No Task Added.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500 m-4" onClick={()=>onDeleteTask(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

