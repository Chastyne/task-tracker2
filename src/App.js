
import './App.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";

const App = () => (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskList/>
    </div>
  );

export default App;
