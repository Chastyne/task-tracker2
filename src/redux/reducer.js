import { ADD_TASK, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };

    default:
      return state;
  }
};
export default reducer;
