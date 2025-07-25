import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Concept Clarity.",
    points: [
      "Gain a deep understanding of core topics.",
      "Strengthen foundational knowledge.",
      "Learn through real-world examples."
    ]
  },
  {
    id: "02",
    title: "Practical Skill Development.",
    points: [
      "Work on hands-on projects and case studies.",
      "Master tools and frameworks used in the industry.",
      "Build confidence through practice."
    ]
  },
  {
    id: "03",
    title: "Problem Solving Ability.",
    points: [
      "Learn to approach problems logically.",
      "Develop debugging and troubleshooting skills.",
      "Tackle real-time challenges with ease."
    ]
  },
  {
    id: "04",
    title: "Career Readiness.",
    points: [
      "Build a strong portfolio and resume.",
      "Improve communication and collaboration skills.",
      "Be ready for job interviews and internships."
    ]
  }
];

const CourseEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.effect-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-20 bg-black text-white text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-2">Course Effect.</h2>
      <p className="text-gray-400 mb-10">
        What you’ll gain by completing this course.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map(({ id, title, points }) => (
          <div
            key={id}
            className="effect-card opacity-100 border border-white/10 p-6 rounded-xl bg-[#0B0B0B] text-left shadow-md"
          >
            <h3 className="text-red-500 font-semibold text-sm mb-2">{id}</h3>
            <h4 className="text-xl font-bold text-gray-100 mb-4">{title}</h4>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseEffect;
