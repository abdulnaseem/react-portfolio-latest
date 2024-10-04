import Footer from "../../components/Footer/footer";
import './about.css';

const About = () => {

    return (
        <>
            <div className="about-container">
                <h2 className="about-title text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-md">What I do:</h2>
                <ul className="about-list">
                    <li>Build responsive web applications with React</li>
                    <li>JavaScript, React, NodeJS - HTML & CSS</li><br/>
                    <li>Experienced Full Stack Developer working at Cognizant (Angular 11, NodeJS, Java Spring Boot, PostgreSQL, Jenkins Pipeline, Git & Azure Command Line)</li>
                    <li>Functional Tests, Unit Tests, SonarQube & Swagger UI</li>
                    <li>Worked on Public Sector project resolving manual and automated pa11y tests (Web Content Accessibility Guidelines)</li>
                    <li className="aws"><a href="https://www.credly.com/badges/ba9edc32-9d14-4c7b-b846-6b6f7308ea84/linked_in?t=s3vio9" target="_blank">AWS Certified Cloud Practitioner</a></li>
                </ul>
            </div>
            <Footer footer="bottom" />
        </>
    )
}

export default About;