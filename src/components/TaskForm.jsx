
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const TaskForm = ({ taskToEdit, clearEdit }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(taskToEdit || { title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(updateTask(taskToEdit.id, task));
      clearEdit();
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    setTask({ title: "", description: "" });
  };

  return (
    
  );
};

TaskForm.propTypes = {
  taskToEdit: PropTypes.object,
  clearEdit: PropTypes.func,
};

export default TaskForm;
