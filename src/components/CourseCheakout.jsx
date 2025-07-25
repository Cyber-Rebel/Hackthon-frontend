import React, { useEffect, useRef, useState } from 'react';
import { Steps, Divider } from 'antd';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Faq from '../components/Faq'
import './indes.css'
import CourseModels from '../components/CourseModels'
import Fotter from '../components/Fotter.jsx'
import { useNavigate } from "react-router-dom";
const CourseCheakout = () => {
      const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const stepRef = useRef([]);
  const blueLineRef = useRef(null); // Ref for animated line
  const containerRef = useRef(null);
const benefits = [
  {
    title: 'No-nonsense Approach',
    description: 'Practical Delivery. Risk-free Investment. Lifetime Access.',
  },
  {
    title: '100% Refund Policy',
    description: 'Cancel anytime within 14 days of purchase and get a full refund, no questions asked.',
  },
  {
    title: 'Free Upgrades',
    description: 'Gain all future updates, additions and changes made to the course at no additional cost.',
  },
];

const bulletVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 100,
    },
  }),
};


  const containerVariant = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const itemVariant = {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut'
        }
      }
    };
  const content = [
    'Q) What You\'ll Learn in This Course',
    'Ans: "Understand YouTube As A Science"',
    'Not Virality. Not Luck. Pure Science!',
    'Struggle to come up with new video ideas?',
    'Feeling stuck and unsure of what to create next?',
    'Get practical insights into:',
    '✔️ Identifying your niche',
    '✔️ Understanding your audience',
    '✔️ Creating a winning content strategy'
  ];
  const toggleModule = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    gsap.from(stepRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });

    const timer = setTimeout(() => {

      // Animate blue line after loading completes
      gsap.fromTo(
        blueLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left',
          duration: 1.5,
          ease: 'power2.out',
        }
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      title: <span className="text-white">Starting</span>,
      description: (
        <span className="text-gray-400">Your journey begins with WebVeda</span>
      ),
    },
    {
      title: <span className="text-white">Checking Course</span>,
      description: (
        <span className="text-gray-400">You're one step away from transformation</span>
      ),
    },
    {
      title: <span className="text-white">Buy Now</span>,
      description: (
        <span className="text-gray-400">Invest your time to change your life</span>
      ),
    },
  ];

  return (
    <>
    
        <div className="bg-black overflow-x-hidden text-white  relative">
          <div className='fixed bottom-6 right-6 z-50'
          >
      <button className='glow-on-hover   mx-10   '>Contact Button</button></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Header Left */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                  [ Live ]
                </span>{' '}
           How To YouTube   
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-800 px-3 py-1 text-sm rounded-full inline-flex items-center">
                  Live Classes
                  <span className="ml-2 text-blue-400">✔</span>
                </span>
              </div>

              <p className="text-xl font-semibold mb-2">
                <span className="text-gray-400 line-through">₹ 1957</span>{' '}
                <span className='text-green-400' >₹ 0 </span>{' '}
                <span className="text-sm text-gray-400">(12% Off)</span>
              </p>

              <button onClick={()=>{
                navigate('/youtube-cohort')
              }} className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-md text-sm my-4">
                FREE - Lear Now
              
              </button>

              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
               UnderStainding Youtube Scincese How upload your
              First Youtube Video <br />
               How to monitarized To user Youtube Challeage
              </p>

            </div>

            {/* Right Video */}
            <div className="w-full">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-lg w-full h-[315px]"
                  src="https://www.youtube.com/embed/UrW1QInEfFQ"
                  title="DSA Domination Cohort | Course Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mt-20 px-4 md:px-20 relative">
            {/* Animated blue line under steps */}
              

            <Steps
              progressDot
              current={1}
              direction="horizontal"
              className="relative z-10"
              items={steps.map((step, index) => ({
                ...step,
                className: 'step-item',
                description: (
                  <div >
                    {step.description}
                  </div>
                ),
            }))}
            />
          </div>

          <Divider style={{ backgroundColor: '#444' }} />
    <div className='w-full mt-16 '>
    <div className='flex ' >
      <CourseModels className='w-full bg-red-00'/> 
      
<div className=" text-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto space-y-6">
      {benefits.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bulletVariant}
          className="flex items-start gap-4 bg-[#1e1e1e] p-5 rounded-xl hover:scale-[1.02] hover:bg-[#242424] transition duration-300"
        >
          <CheckCircle2 className="text-teal-400 mt-1 shrink-0" size={28} />
          <div>
            <h3 className="text-lg font-bold text-teal-300">{item.title}</h3>
            <p className="text-sm text-gray-300 mt-1 leading-relaxed">
              {item.description}

            </p>
          
          </div>
        </motion.div>
      ))}
    </div>
    </div>
    {/* {Faq Sextion} */}
    <div >
      <Faq bg={'transparent'} w={'w-full'} />
    </div>
    <Fotter/>
    </div>
        </div>
      
    </>
  );
};

export default CourseCheakout;
// page hae
    