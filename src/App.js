import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/LogIn'
import Dashboard from './pages/dashboard/Dashboard'
import NotFound from './pages/404/NotFound';
import Logout from './pages/logout/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
