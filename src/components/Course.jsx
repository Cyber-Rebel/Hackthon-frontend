import React from 'react';
import { useNavigate } from "react-router-dom";

const Course = () => {
     const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-black text-white shadow-lg border border-neutral-800">
      <img
        className="w-full h-60 object-cover"
        src="https://ik.imagekit.io/cyberrebel/image.png?updatedAt=1753254746911"
        alt="DSA Domination"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold">
          How To YouTube: Grow And Monetize Your YouTube Channel
        </h2>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1  text-white text-xs font-bold px-2 py-1 rounded ">
            <div className="w-2 h-2  rounded-full bg-red-700  " />
            LIVE BATCH
          </span>
          <span className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">English</span>
        </div>

        <p className="text-lg font-bold text-teal-300">₹999 only</p>

        <button   onClick={()=>{

         navigate('/coursecheakout')
        }} className="w-full  bg-teal-400 hover:bg-teal-500 text-black font-semibold py-2 px-4 rounded-xl transition-all">
          Check out course
        </button>
        
        
        
      </div>
    </div>
  );


};
//disabled={true}
export default Course;
    