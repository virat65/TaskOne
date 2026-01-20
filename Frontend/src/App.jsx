import React from 'react'
import "./App.css";
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
import Services from './Components/Services';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Services />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App
