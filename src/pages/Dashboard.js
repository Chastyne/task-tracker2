import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebaseconfig"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { useSelector } from "react-redux"; 
import TaskList from "../components/TaskList"; 
import { Link } from "react-router-dom"; 
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  // Fetch tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
    } catch (err) {
      console.error("Error logging out:", err.message);
    }
  };

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
        navigate("/dashboard");
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
          <div style={styles.container}>
              <button
               onClick={handleLogout} 
               style={styles.button}
              >
                Logout
              </button>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
        <h1>Welcome to Task Manager Dashboard</h1> 
        <p>Ready to track all your tasks?</p>
        <p>Log in to view, add, edit or delete your tasks</p> 
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
      textAlign: "center",
      margin: "20px 0",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

export default Dashboard;

