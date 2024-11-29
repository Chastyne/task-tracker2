import { ADD_TASK, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: [],
};
const reducer = (state = initialState, action) => {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };


    default:
      return state;

}
export default reducer;