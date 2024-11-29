
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/actions";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">{taskToEdit ? "Update" : "Add"} Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  taskToEdit: PropTypes.object,
  clearEdit: PropTypes.func,
};

export default TaskForm;
