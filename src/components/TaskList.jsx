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
    </div>
  );
};

export default TaskList;
