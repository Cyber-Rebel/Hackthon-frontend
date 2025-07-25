import React from 'react';
import Bookco from '../components/Bookco';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();

  return (
    <div className='flex w-full min-h-screen flex-col gap-14 pt-10 px-10'>
      <div className='flex'>
      {/* Book 1 */}
      <div className='flex gap-14 flex-wrap'>
        <Bookco img='https://ik.imagekit.io/cyberrebel/New%20Folderf/image.png?updatedAt=1753464106697' />
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold text-teal-400">DO EPIC SHIT</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is a book to be read, and re-read — a book whose lines you will underline 
            and reflect on. A book you’ll gift your family, friends, and even strangers. 
          </p>
          <p className="text-sm text-gray-500 italic">— Ankur Warikoo</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl shadow-lg hover:bg-teal-400 transition-all duration-300"
            onClick={() => navigate(`/buy-one/do-epic-shit/399`)}
          >
            Buy Now
          </motion.button>
        </div>
      </div>

      {/* Book 2 */}
      <div className='flex gap-14 flex-wrap'>
        <Bookco img='https://ik.imagekit.io/cyberrebel/image.png?updatedAt=1753463726249' />
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold text-teal-400">GET EPIC SHIT DONE</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            36 life questions you need answers to! DO EPIC SHIT made you think, GET EPIC SHIT DONE will make you act!
          </p>
          <p className="text-sm text-gray-500 italic">— Ankur Warikoo</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl shadow-lg hover:bg-teal-400 transition-all duration-300"
            onClick={() => navigate(`/buy-one/get-epic-shit-done/499`)}
          >
            Buy Now
          </motion.button>
        </div>
      </div>

      {/* Book 3 */}
      <div className='flex gap-14 flex-wrap'>
        <Bookco img='https://ik.imagekit.io/cyberrebel/videos/image.png?updatedAt=1753463872486' />
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold text-teal-400">BUILD AN EPIC CAREER</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A practical guide to building a career you actually want. Ankur Warikoo's insights will help you gift this to yourself and others.
          </p>
          <p className="text-sm text-gray-500 italic">— Ankur Warikoo</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl shadow-lg hover:bg-teal-400 transition-all duration-300"
            onClick={() => navigate(`/buy-one/build-an-epic-career/599`)}
          >
            Buy Now
          </motion.button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
