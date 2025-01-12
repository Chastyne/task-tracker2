import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig"; // Adjust the path to your Firebase setup file

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
    } catch (err) {
      console.error("Error logging out:", err.message);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
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

export default Logout;
