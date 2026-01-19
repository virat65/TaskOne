import React from 'react'
import "./App.css";
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App
