import React from 'react'
import "./app.scss"
import Home  from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Watch from './pages/Watch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
  
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
      <Routes>
        
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
      
      </Routes>
      </Router>
    </>
  );
}

export default App