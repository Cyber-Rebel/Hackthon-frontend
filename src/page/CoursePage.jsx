import React, { useState } from 'react';
import Course from '../components/Course.jsx';
import CourseCheakout from '../components/CourseCheakout.jsx'
const CoursePage = () => {
  return (
    <div className="p-8">
     
<div>
      <div className="flex flex-wrap gap-20">
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />

      </div>
</div>
<div>

       
</div>

    </div>
  );
};

export default CoursePage;

  //   const [open,setopen] = useState('A')
  // const funcopen=(value)=>{
  //   console.log(value)
  //     setopen(value)
  // }
  // <button onClick={()=>funcopen('A')} className='p-19'>A</button>
  // <button onClick={()=>funcopen('B')} className='p-19'>B</button>
  // <button  onClick={()=>funcopen('C')} className='p-19'>C</button>
  
      // {open=='A'&&<div>Disaplay a</div>}
      // {open=='B'&&<div>Display b</div>}

      // {open=='C'&&<div>Display c</div>}
      // onChange lagta hae input select
  // <input type="text" className='bg-red-50 text-black' onChange={(e)=>console.log(e.target.value)} />