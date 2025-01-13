
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import TaskForm from './components/TaskForm';
import Logout from './components/auth/Logout';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/taskform" element={<TaskForm />} /> 
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default App;
