import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Course", "Buy Book", "About", ];
  const [open,setopen]=useState(false)
  useEffect(()=>{
   const user = localStorage.getItem('user')
   if(user){
    setopen(!open)
   }
   },[])
  return (
    <nav className="text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <a href="/" className="text-2xl font-bold tracking-tight hover:text-blue-400 transition duration-300">
          WebVeda
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="relative group transition duration-200"
            >
              <span className="group-hover:text-blue-400 transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              
            </a>
          ))}
         {open ? (
  <button
    onClick={() => {
      localStorage.clear();     // sab data hata dega
      window.location.reload(); // page reload karega
    }}
  >
    Logout
  </button>
) : (
  ""
)}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block text-white text-base font-medium hover:text-blue-400 transition"
            >
              {item}
              
            </a>
          ))}
      
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
