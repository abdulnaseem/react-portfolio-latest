import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css'
import TBMLogo from '../../assets/images/tbm.jpeg';
import ToDoListImage from '../../assets/images/tdl.jpeg';
import ImageGalleryImage from '../../assets/images/ig.jpeg';
import TN from '../../assets/images/talibnotes.jpeg';
import Card from '../../components/Card/card';
import Footer from '../../components/Footer/footer';


const Home = () => {

    const navigate = useNavigate();

    let projectData = [
        {
            id: 0,
            cName: "live",
            image: TN,
            title: "Talib Notes",
            text: `Working on improving UI/UX and creating a seamless design as well as refactoring code to make it reusable (dynamic components). Qur'an note taking application for students. I am working as lead frontend developer alongside a backend developer whose focusing on Node.<br/><br/>
                  <strong>Tech Stack:</strong> React | CSS | Tailwindcss`,
            link: "https://mhuss03.github.io/student-notes/",
            linkText: "View"
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
                        I am Abdul, a passionate and dedicated React developer, focused on turning creative ideas 
                        into functional, user-friendly web experiences. Whether you’re looking to build sleek, scalable applications 
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