import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div>
      <TaskForm 
        taskToEdit={taskToEdit}
        clearEdit={() => setTaskToEdit(null)}
      />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => setTaskToEdit(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default TaskList;
