import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../page/Home.jsx'
import Notfouned from '../page/Notfouned.jsx'
import Logout from '../page/Logout.jsx'
import CoursePage from '../page/CoursePage.jsx'
import Book from '../page/Book.jsx'
import About from '../page/About.jsx'
import Authwapper from './Auth/Authwap.jsx'
import Login from '../page/Login.jsx'
import CourseCheakout from '../components/CourseCheakout.jsx'
import CourseModules from '../components/Videoplayer.jsx'
import BuyPage from '../page/BuyBook.jsx'
const Maintainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={
         <Authwapper>
          
        <CoursePage />
          </Authwapper>
        } />
      <Route path="*" element={<Notfouned/>} />
      <Route path="/buy-book" element={
           <Authwapper>

               <Book/>
           </Authwapper>
        } />
      <Route path="/logout" element={<Logout/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/coursecheakout' element={<CourseCheakout/>}/>
      <Route path='/youtube-cohort' element={<CourseModules/>} />
      <Route path="/buy-one/:bookname/:price" element={<BuyPage />} />
    </Routes>
  )
}

export default Maintainroutes
