import './App.css';
import { FaLinkedin } from "react-icons/fa";
import TBMLogo from './assets/images/logo-image.jpg';
import ToDoListImage from './assets/images/to-do-list.jpg';
import ImageGalleryImage from './assets/images/image-gallery.png';

function App() { 

  let projectData = [
    {
      id: 0,
      iconLetter: "",
      image: "src/assets/images/logo-image.jpg",
      header: "The Butterfly Movement - Health",
      text: ""
    },
  ];

  return (
    <>
      <div className='header-section text-center'>
        <h1 className="header-title p-5 text-6xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">Abdul Naseem Khan</h1>

        <div class="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
            <a href="https://www.linkedin.com/in/abdul-naseem-khan-14b429198" class="hi-icon hi-icon-mobile" target='_blank'><FaLinkedin size={30} /></a>
        </div>

        <div className='header-text-section'>
          <p className='header-text drop-shadow-md'>I am a Software Engineer with over 2 years of experience in full-stack development, specializing in Angular 11 for frontend and Java with Spring Boot for backend development. I've crafted dynamic, responsive web applications while ensuring seamless user experiences and maintaining robust server-side functionality. My experience also includes CI/CD automation using Jenkins and deploying/debugging applications via Azure Kubernetes (kubectl) pods.</p>
          <p className='header-text drop-shadow-md'>I have been honing my skills for a while as I have a deep interest in React for frontend development. I’ve built several projects with React, including a To-Do list application that leverages components, prop drilling, and state management. Additionally, I worked on a live project where I implemented a fully responsive design and custom-built an image gallery component. I aspire to transition into a dedicated frontend developer role, focusing on React, to further develop my skills and contribute to building cutting-edge web applications.</p>
        </div>
      </div>

      <div className='live-project-section text-center'> 
        <h2 className="live-project-title p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-md">Live Project</h2>

        <div className='card'>
          <img className='card-image' src={TBMLogo} alt="" />
          <h3 className='card-heading text-xl font-bold sm:text-xl'>The Butterfly Movement - Health</h3>
          <p className='card-text'>
            Web Application built for a community leader based in Shadwell, Tower Hamlets.<br/><br/>
            <strong>Tech Stack:</strong> React | CSS | Tailwindcss | Responsive Web Design
          </p>
          <a className="card-view font-bold" href="https://thebutterflymovement.health/" target='_blank'>View</a>
        </div>
      </div>

      <div className='general-project-section text-center'> 
        <h2 className="live-project-title p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-md">General Projects</h2>

        <div className='card'>
          <img className='card-image' src={ToDoListImage} alt="" />
          <h3 className='card-heading text-xl font-bold sm:text-xl'>To Do List</h3>
          <p className='card-text'>
            Add, edit, delete and filter a to do list web application.<br/><br/>
            <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState
          </p>
          <a className="card-view font-bold" href="https://github.com/abdulnaseem/react-to-do-list" target='_blank'>GitHub</a>
        </div>

        <div className='card'>
          <img className='card-image' src={ImageGalleryImage} alt="" />
          <h3 className='card-heading text-xl font-bold sm:text-xl'>Image Gallery</h3>
          <p className='card-text'>
            Map and show all images, click and get image id - enlarge image into gallery slide, go next or to previous image, close image.<br/><br/>
            <strong>Tech Stack:</strong> React | Prop Drilling | CSS | Tailwindcss | useState
          </p>
          <a className="card-view font-bold" href="https://github.com/abdulnaseem/react-image-gallery" target='_blank'>GitHub</a>
        </div>
      </div>

    </>
  )
}

export default App;
