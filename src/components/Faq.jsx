import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is the course duration?",
    answer: "The course lasts for 8 weeks, including live sessions and recorded content.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you'll receive a certificate after successfully completing the course.",
  },
  {
    question: "Are the sessions live or recorded?",
    answer: "Sessions are live, and recordings will be available afterward.",
  },
  {
    question: "Can I ask doubts during class?",
    answer: "Absolutely! Each session includes a Q&A section.",
  },
];

const FaqPage = ({bg='neutral-900',w='max-w-3xl'}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Scroll animation
    faqRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50 },
        {
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
            scrub:true,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    // Expand animation for answer
    if (openIndex !== null && answerRefs.current[openIndex]) {
      gsap.fromTo(
        answerRefs.current[openIndex],
        { height: 0, },
        {
          height: 'auto',
          duration: 0.4,
          ease: 'power2.out',
        }
      );
    }
  }, [openIndex]);

  return (
    <div className=" bg-gradient-to-b w from-black to-gray-900 p-8">
      <div className={`${w} mx-auto p-6 rounded-xl shadow-2xl bg-${bg}`}>
        <h1 className="text-4xl font-bold mb-10 text-center text-white">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="border-b border-neutral-700  py-4"
          >
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
            </button>

            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="overflow-hidden"
            >
              {openIndex === index && (
                <p className="mt-2 text-white">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
