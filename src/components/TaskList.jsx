import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import TaskForm from "./TaskForm"; 
import { deleteTask } from "../redux/actions"; 
import "./TaskList.css"; 

const TaskList = () => {
  // Access the tasks from Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [taskToEdit, setTaskToEdit] = useState(null);

  // Handle task deletion
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Handle "Edit" button click to open the task form
  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  // Redirect back to task list after updating
  const handleUpdateRedirect = () => {
    setTaskToEdit(null); 
    navigate("/dashboard"); 
  };

  return (
    <div className="task-tracker">
      <h1 className="heading">Task List</h1>

      {/* Display Task Form when task is being edited */}
      {taskToEdit ? (
        <div className="form-container">
          <TaskForm
            taskToEdit={taskToEdit}
            clearEdit={() => setTaskToEdit(null)}
            onUpdateSuccess={handleUpdateRedirect} 
          />
        </div>
      ) : (
        // List of tasks if no task is being edited
        <ul className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks available. Add a new task!</p>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <div className="task-actions">
                  <button className="edit-button" onClick={() => handleEdit(task)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

