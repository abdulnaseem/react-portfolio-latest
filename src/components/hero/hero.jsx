import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAngular,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiFramer, SiJavascript, SiMongodb,
} from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { useEffect, useState } from 'react';

const icons = [
  { Component: FaReact, color: 'text-cyan-400', size: 40 },
  { Component: FaAngular, color: 'text-red-500', size: 40 },
  { Component: SiTailwindcss, color: 'text-blue-300', size: 38 },
  { Component: FaHtml5, color: 'text-orange-500', size: 38 },
  { Component: FaCss3Alt, color: 'text-blue-400', size: 38 },
  { Component: SiTypescript, color: 'text-blue-500', size: 36 },
  { Component: SiFramer, color: 'text-pink-400', size: 36 },
  { Component: SiJavascript, color: 'text-yellow-400', size: 36 },
  { Component: FaNodeJs, color: 'text-green-500', size: 36 },
  { Component: SiMongodb, color: 'text-green-400', size: 36 },
  { Component: TbApi, color: 'text-white', size: 36 },
];

const HeroSection = ({ navigate }) => {
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRadius = () => {
    if (screenWidth < 400) return 60;
    if (screenWidth < 640) return 80;
    if (screenWidth < 1024) return 100;
    return 120;
  };

  const getCircleSize = () => getRadius() * 2 + 60;

  const radius = getRadius();
  const circleSize = getCircleSize();

  return (
    <section className="relative min-h-screen md:min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 bg-gradient-to-br from-teal-900 via-black to-teal-950 text-white">
      {/* Text Content */}
      <div className="z-10 text-center md:text-left">
        <h1 className="text-4xl mt-10 md:mt-0 md:text-5xl font-extrabold mb-4">Abdul Naseem Khan</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Bringing Ideas to Life through Code</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Passionate Software Developer crafting modern web & mobile experiences with React, Node.js, TypeScript, Tailwind & more.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-teal-300 text-teal-900 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg"
          onClick={() => navigate('/contact')}
        >
          Get in touch
        </motion.button>
      </div>

      {/* Spinning Circle of Icons */}
      <div
        className="circle relative flex items-center justify-center mx-auto"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
        }}
      >
        {/* Outer Circle */}
        <div
          className="absolute border border-teal-500 rounded-full animate-spin-slow"
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
          }}
        />

        {/* Icons */}
        {icons.map(({ Component, color, size }, index) => {
          const angle = (360 / icons.length) * index;
          const rad = (angle * Math.PI) / 180;

          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          const responsiveSize =
            screenWidth < 400 ? size * 0.6 :
            screenWidth < 640 ? size * 0.7 :
            screenWidth < 1024 ? size * 0.85 :
            size;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`absolute ${color}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                width: `${responsiveSize}px`,
                height: `${responsiveSize}px`
              }}
            >
              <Component size={responsiveSize} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
