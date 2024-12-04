import TNLogo from '../../assets/images/TalibNotes.png';
import TNHome from '../../assets/images/talibnotes-home.jpeg';
import Footer from '../Footer/footer';
import video from '../../assets/videos/talibnotes.webm';
import './TalibNotes.css';
import { useEffect } from 'react';


const TalibNotes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-center m-5">Talibnotes</h1>
            <div className='tn-header'>
                <div className='talib-notes-logo'>
                    <img src={TNLogo} alt="" />
                </div>

                <div className='talib-notes-text'>
                    <p>
                        Talib Notes is a thoughtfully designed Qur’an note-taking application, created with Madrasah (school) students in mind. 
                        It allows students to read the Qur’an and seamlessly take notes for each Ayah of a Surah, providing a centralised space to 
                        store their reflections and insights. This ensures that their notes are always accessible, helping them revisit and reflect 
                        on their learnings whenever needed.
                        <br /><br />
                        The application also caters to a broader audience, including non-academics who wish to engage with the Qur’an on a 
                        personal level. Whether for deeper understanding, personal reflection, or spiritual growth, Talib Notes offers a simple 
                        yet powerful tool for capturing and revisiting meaningful thoughts and observations.
                    </p>
                    <br />
                    <p><strong>I am the Lead Frontend Developer focusing on:</strong></p>
                    <ul className='ms-8'>
                        <li><strong>React | Redux | HTML | CSS | Tailwindcss | Framer Motion | Jest | React Testing Library</strong></li>
                    </ul>
                    <br />
                    <p>
                        View our beta site here: <a className='text-blue-600 hover:text-blue-900 underline' href="https://beta.talibnotes.com/" target='_blank'><strong>Talibnotes Beta</strong></a>
                    </p> 
                </div>
            </div>

            <div className="inner flex our-team-container mt-10">
                <div className="section-1">
                    <h3 className="text-center font-bold text-2xl">Our Team</h3>
                    <p className="mt-5">
                        Our team is a dynamic group of three professionals, each with a clear role to ensure smooth collaboration 
                        and project success.
                        <br /><br />
                        I take the lead on <strong>frontend development</strong>, where my primary focus is on crafting responsive, user-friendly 
                        interfaces that deliver a seamless experience. This involves implementing the design vision, optimising performance, 
                        and ensuring accessibility across various devices and browsers. My role also includes collaborating closely with 
                        the backend developer to integrate APIs and functionality, ensuring a smooth connection between the user interface 
                        and the underlying system.
                        <br /><br />
                        Our <strong>backend developer</strong> handles server-side infrastructure, including database design, API development, and ensuring 
                        system security and scalability.
                        <br /><br />
                        Our <strong>project manager</strong> oversees team communication, organises meetings, and manages the UI/UX design process to ensure 
                        intuitive, user-focused experiences. They also maintain an agile workflow using Notion, organising tickets for 
                        development, bug fixes, and testing to keep the team on track and productive.
                        <br /><br />
                        Together, we combine our expertise to deliver innovative and efficient solutions.
                    </p>
                    <br />
                    <p className='underline font-bold'>Our stack includes:</p>
                    <ul className='ms-8'>
                        <li>Frontend - React | Redux | HTML | CSS | Tailwindcss | Framer Motion | Jest | React Testing Library</li>
                        <li>Backend - Node.js | Firebase Authentication | MariaDB</li>
                        <li>Figma | Notion</li>
                        <li>Agile working environment</li>
                    </ul>
                </div>

            </div>

            <div className='demo-container'>
                <h3 className="text-center font-bold text-2xl">Demo</h3>
                <video className='m-5' controls width="800">
                    <source src={video} type="video/webm" />
                </video>
            </div>
            <Footer />
        </>
    )
}

export default TalibNotes;