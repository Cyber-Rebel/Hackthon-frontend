import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Maintainroutes from "./Mainroutes/Mainroutes";



const App = () => {
  const[navopen,setnavopen] = useState(true)
  return (
    <div className=" w-full h-auto  overflow-x-hidden  bg-gradient-to-r from-black via-[#000000] to-black text-white">
      <Navbar />
      <Maintainroutes/>
    </div>
  );
};

export default App;
