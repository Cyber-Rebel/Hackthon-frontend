import { div } from "framer-motion/client";
import React from "react";

const Hero = () => {
  return (
<div className="flex  w-full gap-10  ">
    <section className="w-[60%] flex flex-col justify-center items-start px-8 md:px-20 py-16 space-y-6">
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        The Course That Change  <br />
        a <span className="text-gray-300">Making Sense</span>
      </h1>
      <p className="text-gray-400 max-w-lg">
        Design agency crafting minimal brand identities that speak volumes.
      </p>
      <div className="flex space-x-4">
        <button className="bg-orange-400 text-black px-5 py-2 rounded font-medium hover:bg-orange-500 transition">
          View Course
        </button>
        <button className="border border-gray-400 px-5 py-2 rounded font-medium hover:border-white transition">
          View Books 
        </button>
      </div>
    
    </section>
    <section>
        <div className="w-full p-10 flex justify-center items-center  h-full" >
        <video className=" rounded-e-2xl "  controls src="https://ik.imagekit.io/cyberrebel/28ejWWU3dqIBG87tPq2WneE8oq0.mp4?updatedAt=1753215724208"
          ></video>
        </div>
            
    </section>
    </div>
  );
};

export default Hero;
