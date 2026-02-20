import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Servicesgrid from './components/Servicesgrid';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Banner from './components/Banner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Studentdashboard from './pages/Studentdashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/student-dashboard' element={<Studentdashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
