import Footer from "../../components/Footer/footer";
import './about.css';
import cert from '../../assets/images/react-cert.jpg';

const About = () => {

    return (
        <>
            <div className="about-container inner">
                <h2 className="about-title">A bit of what I do</h2>
                <ul className="about-list">
                    <li>Build functional and responsive web applications with React</li>
                    <li>JavaScript, React, NodeJS - HTML & CSS</li><br/>
                    <li>Experienced Full Stack Developer working at Cognizant (Angular 11, NodeJS, Java Spring Boot, PostgreSQL, Jenkins Pipeline, Git & Azure Command Line)</li>
                    <li>Functional Tests, Unit Tests, SonarQube & Swagger UI</li>
                    <li>Worked on Public Sector project resolving manual and automated pa11y tests (Web Content Accessibility Guidelines)</li>
                    <li className="aws"><a href="https://www.credly.com/badges/ba9edc32-9d14-4c7b-b846-6b6f7308ea84/linked_in?t=s3vio9" target="_blank">AWS Certified Cloud Practitioner</a></li>
                </ul>
            </div>

            <h2 className="cert-header heading">Certifications</h2>
            <div className="inner flex certifications">
                <div className="section-1">
                    <h3 className="sub-heading">React - The Complete Guide 2024 (incl. Next.js, Redux)</h3>
                    <p className="mt-5">
                        This course helped me build my foundational knowledge and improved my general knowledge of the entire 
                        React eco system (best practices), also having dived deep into a number of subjects for instance - Redux, 
                        Next.js & React Router playing the biggest parts! Building more than 20 projects, some small and others 
                        large - each provided an insight of issues and various ways to think and act in resolving issues - coming 
                        up with solutions.
                    </p>
                </div>
                <div className="section-2">
                    <img className="section-image" src={cert} alt="" />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About;