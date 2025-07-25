// CourseModules.jsx
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const modulesData = [
  {
    title: 'Module 1: Introduction (1.5 hrs)',
    details: 'understand your motivation behind content creation. Adapt your content strategy according to your target audience',
  },
  {
    title: 'Module 2: Target Audience',
    details: 'Define your target audience using practical frameworks',
  },
  {
    title: 'Module 3: Content Engine',
    details: 'Honest and transparent insights into Ankurs content process',
  },
    {
    title: 'Module 1: Introduction (1.5 hrs)',
    details: 'understand your motivation behind content creation. Adapt your content strategy according to your target audience',
  },
  {
    title: 'Module 2: Target Audience',
    details: 'Define your target audience using practical frameworks',
  },
  {
    title: 'Module 3: Content Engine',
    details: 'Honest and transparent insights into Ankurs content process',
  },
  
];

const CourseModules = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const detailRefs = useRef([]);

  useEffect(() => {
    detailRefs.current.forEach((el, index) => {
      if (el) {
        gsap.set(el, { height: openIndex === index ? 'auto' : 0, overflow: 'hidden' });
      }
    });
  }, []);

  const toggleModule = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);

    detailRefs.current.forEach((el, i) => {
      if (!el) return;
      const targetHeight = i === index && !isOpen ? el.scrollHeight : 0;
      gsap.to(el, {
        height: targetHeight,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    });
  };

  return (
    <div className="  mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
      <div className="space-y-4">
        {modulesData.map((module, i) => (
          <div
            key={i}
            className=" border-t-orange-50 rounded-xl shadow-md text-white"
              onClick={() => toggleModule(i)}
          >
            <button
              className="w-full text-left px-6 py-4 text-lg font-semibold flex justify-between items-center"
            >
              {module.title}
              {/* <span>{openIndex === i ? '▲' : '▼'}</span> */}
            </button>
            <div
              ref={(el) => (detailRefs.current[i] = el)}
              className="px-6 overflow-hidden text-gray-300"
            >
              <div className="py-4">{module.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
