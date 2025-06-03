import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFramer, SiJavascript, SiMongodb } from 'react-icons/si';
import { TbApi } from "react-icons/tb";

const icons = [
  { Component: FaReact, color: 'text-cyan-400', size: 40 },
  { Component: SiTailwindcss, color: 'text-blue-300', size: 38 },
  { Component: SiTypescript, color: 'text-blue-500', size: 36 },
  { Component: SiFramer, color: 'text-pink-400', size: 36 },
  { Component: SiJavascript, color: 'text-yellow-400', size: 36 },
  { Component: FaNodeJs, color: 'text-green-500', size: 36 },
  { Component: SiMongodb, color: 'text-green-400', size: 36 },
  { Component: TbApi, color: 'text-white', size: 36 },
];

const HeroSection = ({ navigate }) => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 bg-gradient-to-br from-teal-900 via-black to-teal-950 text-white">
      {/* Text Content */}
      <div className="z-10 text-center md:text-left">
        <h1 className="text-4xl mt-10 md:mt-0 md:text-5xl font-extrabold mb-4 text-center md:text-left">Abdul Naseem Khan</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left text-white">Bringing Ideas to Life through Code</h2>
        <p className="text-lg mb-6 max-w-xl text-center md:text-left">
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

      {/* Circle with icons */}
      <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center mx-auto
        md:max-w-[300px] sm:max-w-[220px] xs:max-w-[180px]">
        {/* Outer spinning circle */}
        <div className="absolute border border-teal-500 rounded-full animate-spin-slow inset-0" />
        
        {icons.map(({ Component, color, size }, index) => {
          // Responsive radius calculation
          const radius = window.innerWidth < 640 ? 
            (window.innerWidth < 400 ? 70 : 80) :  // xs: 70px, sm: 80px
            120; // md and up: 120px
          
          const angle = (360 / icons.length) * index;
          const rad = (angle * Math.PI) / 180;
          
          // Responsive icon size
          const responsiveSize = window.innerWidth < 640 ? 
            (window.innerWidth < 400 ? size * 0.6 : size * 0.7) : 
            size;
          
          // Position calculation (using % for better responsiveness)
          const x = 50 + radius * Math.cos(rad) / 1.5;
          const y = 50 + radius * Math.sin(rad) / 1.5;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`absolute ${color}`}
              style={{ 
                left: `${x}%`, 
                top: `${y}%`, 
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