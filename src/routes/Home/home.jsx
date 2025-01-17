import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css'
import TBMLogo from '../../assets/images/tbm.jpeg';
import ToDoListImage from '../../assets/images/tdl.jpeg';
import ImageGalleryImage from '../../assets/images/ig.jpeg';
import TN from '../../assets/images/talibnotes.jpeg';
import Card from '../../components/Card/card';
import Footer from '../../components/Footer/footer';
import TNVideo from '../../assets/videos/talibnotes.webm';
import ECS from '../../assets/images/ecommerce.jpeg';


const Home = () => {

    const navigate = useNavigate();

    let projectData = [
        {
            id: 0,
            cName: "live",
            title: "Talibnotes",
            text: `As the Lead Frontend Developer for this Qur'an note-taking application, I focus on enhancing UI/UX and developing dynamic, reusable components using React, Redux, HTML, CSS, and Tailwind CSS. I collaborate closely with a backend developer working on Node.js to ensure seamless integration and a high-quality user experience.</br></br>
                  <strong>Tech Stack:</strong> React | JavaScript | Redux | HTML | CSS | Tailwindcss | Framer Motion | Jest | React Testing Library`,
            link: "https://mhuss03.github.io/student-notes/",
            linkText: "Read more",
            video: TNVideo
        },
        {
            id: 0,
            cName: "live",
            image: ECS,
            title: "E-Commerce Clothing Store",
            text: `I built a responsive e-commerce store using React, TypeScript - for scalable and type-safe development, and Redux 
                   for robust state management for features like cart operations, and product filtering. 
                   With Tailwind CSS, I crafted a modern UI, and Framer Motion added smooth animations for an engaging user experience. 
                   This project highlights my skills in front-end development and UI/UX design.</br></br>
                  <strong>Tech Stack:</strong> React | TypeScript | Redux | Tailwindcss | Framer Motion | Vercel`,
            link: "https://ecommerce-app-flax-nine.vercel.app/",
            linkText: "View",
        },
        {
          id: 1,
          cName: "live",
          image: TBMLogo,
          title: "The Butterfly Movement - Health",
          text: `Web Application built for a community leader based in Shadwell, Tower Hamlets.<br/><br/>
                <strong>Tech Stack:</strong> React | CSS | Tailwindcss | Heroku | Responsive Web Design`,
          link: "https://thebutterflymovement.health/",
          linkText: "View"
        },
        {
          id: 2,
          cName: "not-live",
          image: ToDoListImage,
          title: "To Do List",
          text: `Add, edit, delete and filter a to do list web application.<br/><br/>
                <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState`,
          link: "https://github.com/abdulnaseem/react-to-do-list",
          linkText: "GitHub"
        },
        {
          id: 3,
          cName: "not-live",
          image: ImageGalleryImage,
          title: "Image Gallery",
          text: `Map and show all images, click and get image id - enlarge image into gallery slide, go next or to previous image, close image.<br/><br/>
                <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState`,
          link: "https://github.com/abdulnaseem/react-image-gallery",
          linkText: "GitHub"
        },
    ];

    const handleNavigate = () => {
        navigate('/contact');
    }

    return (
        <>
            <div className='header-section'>
                <h1 className="header-title text-6xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">Abdul Naseem Khan</h1>
                <h3 className="header-subheading text-2xl font-bold tracking-tight text-white sm:text-2xl drop-shadow-md">Bringing Ideas to Life through Code</h3>

                <div className='header-text-section'>
                    <p className='header-text tracking-tight text-xl sm:text-xl drop-shadow-md'>
                        I am Abdul, a passionate and dedicated Software Developer, focused on turning creative ideas 
                        into functional, user-friendly web and mobile experiences. Whether you’re looking to build sleek, scalable applications 
                        or elevate your existing digital product, I’m here to make it happen.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                        className='get-in-touch bg-white p-3 ps-5 pe-5 text-sm'
                        onClick={handleNavigate}>
                        Get in touch
                    </motion.button>
                </div>
            </div>

            <h2 className="live-project-title p-5 mt-5 text-center text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-md">Projects</h2>
            
            <div className='live-project-section text-center'> 
                <Card data={projectData} />
            </div>

            <Footer />
        </>
    )
}

export default Home;