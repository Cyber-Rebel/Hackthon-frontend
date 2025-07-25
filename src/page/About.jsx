import React from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Infinity,
  ShieldCheck,
  Users2,
  MessageCircle,
  BadgeIndianRupee,
  GraduationCap,
  Briefcase,
  Laptop2,
  Repeat2,
  Users,
  Rocket,
} from "lucide-react";
import Fotter from "../components/Fotter";

const About = () => {
  const audience = [
    {
      icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
      title: "Students",
      description: "Learn concepts not taught in traditional schooling.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-emerald-500" />,
      title: "Working Professionals",
      description: "Build career-boosting skills and grow productively.",
    },
    {
      icon: <Laptop2 className="w-10 h-10 text-orange-500" />,
      title: "Freelancers",
      description: "Discover how to manage and scale your freelance work.",
    },
    {
      icon: <Repeat2 className="w-10 h-10 text-fuchsia-500" />,
      title: "Career Shifters",
      description: "Get the roadmap to confidently shift into a new field.",
    },
    {
      icon: <Users className="w-10 h-10 text-teal-500" />,
      title: "Parents",
      description: "Balance learning and family life with personal growth.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-rose-500" />,
      title: "Dreamers",
      description: "Turn your ideas into reality with the right strategy.",
    },
  ];

  const features = [
    {
      icon: <PlayCircle className="w-10 h-10 text-[#4753F2]" />,
      title: "On-Demand Courses",
      description: "Watch anytime, anywhere and learn at your own pace.",
    },
    {
      icon: <Infinity className="w-10 h-10 text-[#4753F2]" />,
      title: "Lifetime Access",
      description: "Get access as long as you need with a one-time payment.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#4753F2]" />,
      title: "Free Upgrades",
      description: "Unlimited course updates, free of cost—forever.",
    },
    {
      icon: <Users2 className="w-10 h-10 text-[#4753F2]" />,
      title: "Live Group Sessions",
      description: "Monthly live Q&A with Ankur Warikoo and community.",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-[#4753F2]" />,
      title: "Community Learning",
      description: "Engage with learners in a supportive, chat-based network.",
    },
    {
      icon: <BadgeIndianRupee className="w-10 h-10 text-[#4753F2]" />,
      title: "Practical & Affordable",
      description: "Courses with actionable insights at accessible pricing.",
    },
  ];

  return (
    <div>
      {/* About Us Section */}
      <motion.section
        className="bg-[#0f0f0f] text-white px-6 md:px-20 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4753F2] to-green-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About us
          </motion.h2>
          <p className="mt-4 text-gray-400 text-lg">
            Welcome to WebVeda Platform Learn
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-green-400 uppercase tracking-wide font-semibold">
              Meet Our Founder
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-[#4753F2]">Ankur Warikoo</span>
            </h3>
            <p className="text-white text-4xl">
              Ankur Warikoo is a dynamic individual who wears many hats —
              content creator, entrepreneur, and teacher...
            </p>
            <p className="text-white text-4xl">
              Since 2009, he's co-founded ventures like nearbuy.com (CEO:
              2015–2019) and led Groupon India...
            </p>
          </motion.div>

          <motion.img
            src="https://images.podcastpage.io/fetch/https%3A%2F%2Fsites.podcastpage.io%2F614342e6d8de0500188f416c%2Fmedia%2F5fe2326d4daef4f1f6a8.png?w=320&dpr=2.6"
            alt="Ankur Warikoo"
            className="w-full md:w-1/2 h-88 object-center object-contain rounded-lg shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* Why WebVeda Section */}
      <section className="bg-[#0f0f0f] text-white px-6 md:px-20 py-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          <span className="text-[#4753F2]">Why</span>{" "}
          <span className="text-green-400">WebVeda?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start p-6 shadow-sm rounded-xl hover:shadow-md transition"
              initial={{ y: 30, opacity: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who is WebVeda for */}
      <section className="bg-[#0f0f0f] text-white px-6 md:px-20 py-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          <span className="text-purple-600">Who</span>{" "}
          <span className="text-white">Is WebVeda For?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Fotter />
    </div>
  );
};

export default About;
