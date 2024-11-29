import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { deleteTask } from "../redux/actions";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch(); 
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-tracker">
      <h1 className="heading">Task Tracker</h1>
      <div className="form-container">
      <div className="traker">
        <TaskForm 
          taskToEdit={taskToEdit}
          clearEdit={() => setTaskToEdit(null)}
        />
        </div>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <button className="edit-button" onClick={() => setTaskToEdit(task)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
