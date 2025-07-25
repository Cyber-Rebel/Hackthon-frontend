import React from 'react'
import Hero from "../components/Hero.jsx";
import Footer from "../components/Fotter.jsx";
import CourseEffect from "../components/CourseEffect.jsx";
import Ratting from '../components/Rattings.jsx'
import Course from '../components/Course.jsx'
import Rattings from "../components/Rattings.jsx";
import FaqPage from "../components/Faq.jsx";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-auto ' >
    <Hero />
<div className='pt-20'></div>
         <div className="flex justify-center items-center gap-9 flex-wrap  ">
          <div onClick={() => navigate("/course")}>
      <Course />
    </div>
         <div onClick={() => navigate("/course")}>
      <Course />
    </div>     <div onClick={() => navigate("/course")}>
      <Course />
    </div>     <div onClick={() => navigate("/course")}>
      <Course />
    </div>     <div onClick={() => navigate("/course")}>
      <Course />
    </div>
          
         </div>
<div className='pt-20'></div>

         <Rattings/>
<div className='pt-20'></div>

         <CourseEffect/>
<div className='pt-20'></div>

         <FaqPage />
         
         <Footer/>
         </div>
  )
}

export default Home