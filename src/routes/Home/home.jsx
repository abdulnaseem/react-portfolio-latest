import './home.css'
import { FaLinkedin } from "react-icons/fa";
import TBMLogo from '../../assets/images/tbm.jpeg';
import ToDoListImage from '../../assets/images/tdl.jpeg';
import ImageGalleryImage from '../../assets/images/ig.jpeg';
import Card from '../../components/Card/card';
import Footer from '../../components/Footer/footer';


const Home = () => {

    let projectData = [
        {
          id: 0,
          cName: "live",
          image: TBMLogo,
          title: "The Butterfly Movement - Health",
          text: `Web Application built for a community leader based in Shadwell, Tower Hamlets.<br/><br/>
                <strong>Tech Stack:</strong> React | CSS | Tailwindcss | Heroku | Responsive Web Design`,
          link: "https://thebutterflymovement.health/",
          linkText: "View"
        },
        {
          id: 1,
          cName: "not-live",
          image: ToDoListImage,
          title: "To Do List",
          text: `Add, edit, delete and filter a to do list web application.<br/><br/>
                <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState`,
          link: "https://github.com/abdulnaseem/react-to-do-list",
          linkText: "GitHub"
        },
        {
          id: 2,
          cName: "not-live",
          image: ImageGalleryImage,
          title: "Image Gallery",
          text: `Map and show all images, click and get image id - enlarge image into gallery slide, go next or to previous image, close image.<br/><br/>
                <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState`,
          link: "https://github.com/abdulnaseem/react-image-gallery",
          linkText: "GitHub"
        },
    ];

    return (
        <>
            <div className='header-section'>
                <h1 className="header-title text-6xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">Abdul Naseem Khan</h1>

                <div className='header-text-section'>
                    <p className='header-text tracking-tight text-xl sm:text-xl drop-shadow-md'>
                        I am Abdul, a Software Engineer who has experience working as a Full Stack Developer specialising in Angular 11 for Frontend, Java Spring Boot 
                        for backend, Jenkins & Git for CI/CD. I have honed my skills to transition and adapt to become a Frontend Developer focusing on <strong>React.</strong>
                    </p>
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