import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebaseconfig"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { useSelector } from "react-redux"; 
import TaskList from "../components/TaskList"; 
import { Link } from "react-router-dom"; 

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  // Fetch tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="dashboard">
      {user ? (
        <div>
          <h1>Welcome to your Dashboard, {user.email}</h1>
          
          {/* Display tasks if available */}
          {tasks.length > 0 ? (
            <div className="task-list">
              <TaskList />
            </div>
          ) : (
            <div className="no-tasks">
              <p>No tasks available</p>
            </div>
          )}

          
          <div className="add-task-button">
            <Link to="/taskform">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#aa8638",
                  color: "#000",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Add Task
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default Dashboard;

