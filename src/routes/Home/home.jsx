import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/footer';
import { FiExternalLink } from 'react-icons/fi';
import TBMLogo from '../../assets/images/tbm.jpeg';
import ToDoListImage from '../../assets/images/tdl.jpeg';
import ImageGalleryImage from '../../assets/images/ig.jpeg';
import TNVideo from '../../assets/videos/talibnotes.webm';
import ECS from '../../assets/images/ecommerce.jpeg';
import TM from '../../assets/images/task-m.jpeg';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from 'react-icons/fa';

import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiJest,
  SiTestinglibrary,
  SiVercel,
  SiTypescript,
  SiMongodb
} from 'react-icons/si';
import { TbApi, TbFileTypeJsx } from "react-icons/tb";
import { MdDevices } from 'react-icons/md';
import { BsFiletypeJsx } from "react-icons/bs";
import HeroSection from '../../components/hero/hero';

const Home = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      id: 0,
      cName: "live",
      title: "Talibnotes",
      text: `As the Lead Frontend Developer for this Qur'an note-taking application, I focus on enhancing UI/UX and developing dynamic, reusable components using React, Redux, HTML, CSS, and Tailwind CSS. I collaborate closely with a backend developer working on Node.js to ensure seamless integration and a high-quality user experience.`,
      link: "https://mhuss03.github.io/student-notes/",
      linkText: "Read more",
      video: TNVideo,
      icons: [
        { icon: <FaReact className="text-teal-400" title="React" />, name: 'React' },
        { icon: <SiJavascript className="text-yellow-400" title="JavaScript" />, name: 'JavaScript' },
        { icon: <SiRedux className="text-purple-500" title="Redux" />, name: 'Redux' },
        { icon: <BsFiletypeJsx className="text-yellow-600" title="JSX" />, name: 'JSX' },
        { icon: <FaCss3Alt className="text-teal-300" title="CSS" />, name: 'CSS' },
        { icon: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />, name: 'Tailwind CSS' },
        { icon: <SiFramer className="text-pink-500" title="Framer Motion" />, name: 'Framer Motion' },
        { icon: <SiJest className="text-red-500" title="Jest" />, name: 'Jest' },
        { icon: <SiTestinglibrary className="text-gray-300" title="Testing Library" />, name: 'React Testing Library' },
      ]
    },
    {
      id: 1,
      cName: "live",
      image: ECS,
      title: "E-Commerce Clothing Store",
      text: `I built a responsive e-commerce store using React, TypeScript - for scalable and type-safe development, and Redux for robust state management for features like cart operations, and product filtering. With Tailwind CSS, I crafted a modern UI, and Framer Motion added smooth animations for an engaging user experience. This project highlights my skills in front-end development and UI/UX design.`,
      link: "https://ecommerce-app-flax-nine.vercel.app/",
      linkText: "View",
      icons: [
        { icon: <FaReact className="text-teal-400" title="React" />, name: 'React' },
        { icon: <SiTypescript className="text-green-600" title="TypeScript" />, name: 'TypeScript' },
        { icon: <SiRedux className="text-purple-500" title="Redux" />, name: 'Redux' },
        { icon: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />, name: 'Tailwind CSS' },
        { icon: <SiFramer className="text-pink-500" title="Framer Motion" />, name: 'Framer Motion' },
      ]
    },
    {
      id: 2,
      cName: "live",
      image: TM,
      title: "Task Management",
      text: `A simple clean UI/UX task management web application that enables users to add and delete a task, the user can also update the status of task completion.`,
      link: "https://task-management-nine-taupe.vercel.app/",
      linkText: "View",
      icons: [
        { icon: <FaReact className="text-teal-400" title="React" />, name: 'React' },
        { icon: <SiJavascript className="text-yellow-400" title="JavaScript" />, name: 'JavaScript' },
        { icon: <SiRedux className="text-purple-500" title="Redux" />, name: 'Redux' },
        { icon: <BsFiletypeJsx className="text-yellow-600" title="JSX" />, name: 'JSX' },
        { icon: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />, name: 'Tailwind CSS' },
        { icon: <SiJest className="text-red-500" title="Jest" />, name: 'Jest' },
        { icon: <SiTestinglibrary className="text-gray-300" title="Testing Library" />, name: 'React Testing Library' },
        { icon: <FaNodeJs className="text-green-600" title="Node.js" />, name: 'Node.js' },
        { icon: <TbApi className="text-white" title="REST API" />, name: 'REST API' },
        { icon: <SiMongodb className="text-green-600" title="MongoDB" />, name: 'MongoDB' },
      ]
    },
    {
      id: 3,
      cName: "live",
      image: TBMLogo,
      title: "The Butterfly Movement - Health",
      text: `Web Application built for a community leader based in Shadwell, Tower Hamlets.`,
      link: "https://thebutterflymovement.health/",
      linkText: "View",
      icons: [
        { icon: <FaReact className="text-teal-400" title="React" />, name: 'React' },
        { icon: <SiJavascript className="text-yellow-400" title="JavaScript" />, name: 'JavaScript' },
        { icon: <BsFiletypeJsx className="text-yellow-600" title="JSX" />, name: 'JSX' },
        { icon: <FaCss3Alt className="text-teal-300" title="CSS" />, name: 'CSS' },
        { icon: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />, name: 'Tailwind CSS' },
        { icon: <FaNodeJs className="text-green-600" title="Node.js" />, name: 'Node.js' },
        { icon: <MdDevices className="text-gray-400" title="Responsive Web Design" />, name: 'Responsive Design' },
        { icon: <SiVercel className="text-white" title="Vercel" />, name: 'Vercel' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-teal-900 text-white">
      {/* <header className="py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md">Abdul Naseem Khan</h1>
        <h3 className="text-2xl sm:text-3xl font-semibold drop-shadow-md mt-4">Bringing Ideas to Life through Code</h3>
        <p className="mt-6 text-xl max-w-2xl mx-auto">
          I am Abdul, a passionate and dedicated Software Developer, focused on turning creative ideas into functional, user-friendly web and mobile experiences. Whether you're looking to build sleek, scalable applications or elevate your existing digital product, I'm here to make it happen.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          className="mt-8 bg-teal-300 text-teal-900 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-teal-400"
          onClick={() => navigate('/contact')}
        >
          Get in touch
        </motion.button>
      </header> */}
      <HeroSection navigate={navigate} />

      <section className='mb-8 px-4'>
        <h2 className="text-4xl font-bold text-center mb-10 mt-10 drop-shadow-md text-teal-100">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map(({ id, cName, image, title, text, link, linkText, video, icons }) => (
            <div key={id} className={`relative bg-teal-800 p-4 rounded-xl shadow-md ${cName}`}>
              {video && (
                <video controls className="w-full rounded">
                  <source src={video} type="video/webm" />
                </video>
              )}
              {image && (
                <img src={image} alt={title} className="w-full rounded mb-4" />
              )}
              <h3 className={`text-xl font-semibold mb-2 ${title === 'Talibnotes' && 'mt-5'}`}>{title}</h3>
              <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: text }}></p>
              {icons && (
                <div className="grid grid-flow-col auto-cols-max gap-3 mb-4 overflow-x-auto"> 
                    {icons.map(({ icon, name }, idx) => (
                        <div key={idx} className="text-2xl" title={name}>
                            {icon}
                        </div>
                    ))}
                </div>
              )}
              {linkText === "Read more" ? (
                <div className="flex justify-between items-center">
                  <Link to={title.toLowerCase().replace(/\s+/g, '')} className="text-teal-300 font-bold hover:underline hover:text-teal-400">
                    {linkText}
                  </Link>
                  <a href="https://beta.talibnotes.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              ) : (
                <a href={link} target="_blank" className="text-teal-300 font-bold hover:underline hover:text-teal-400">
                  {linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
