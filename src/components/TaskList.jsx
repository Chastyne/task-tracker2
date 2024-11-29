import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch(); 
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

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
            <button onClick={() => handleDelete(task.id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
