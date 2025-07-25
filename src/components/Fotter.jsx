import React from 'react';
import { FaDribbble, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] overflow-hidden text-white px-6 md:px-20 py-16 relative">
      {/* Background watermark text */}
      <h1 className="absolute text-[16vw] text-[#1a1a1a] top-[30%] left-1/2 -translate-x-1/2 font-extrabold tracking-widest select-none pointer-events-none">
        WebVeda
      </h1>

      {/* Top section */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <img src="/dummy-logo.png" alt="WebVeda Logo" className="w-10 h-10 mb-6" />
          <div className="space-y-3">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Explore</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">FAQs</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Pricing</p>
          </div>
        </div>

        {/* Center */}
        <div>
          <div className="space-y-3 mt-10 md:mt-0">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Licensing</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Terms of use</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Refund Policy</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold">Join our monthly newsletter</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-gray-700 px-5 py-2 rounded-full w-full pr-12 text-sm"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-lime-400 w-9 h-9 rounded-full text-black font-bold flex items-center justify-center hover:bg-lime-300">
              →
            </button>
          </div>
          <p className="text-sm font-semibold mt-4">Connect with us</p>
          <div className="flex gap-4">
            {[FaDribbble, FaInstagram, FaLinkedinIn, FaEnvelope].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 mt-16 text-sm text-gray-600 text-center">
        © 2025 WebVeda Online Education platform
      </div>
    </footer>
  );
};

export default Footer;
