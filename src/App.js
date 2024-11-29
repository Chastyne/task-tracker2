
import './App.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";

const App = () => (
  <Provider store={store}>
  <div>
    <h1>Task Manager</h1>
    <TaskList />
  </div>
</Provider>
  );

export default App;
