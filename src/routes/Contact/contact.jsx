import { useMediaQuery } from "react-responsive";
import Footer from "../../components/Footer/footer";
import './contact.css';
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const Contact = () => {

    const isMobile = useMediaQuery({ maxWidth: "645px" });

    return (
        <>
            <div className="contact-container text-center">
                <h2 className="contact-title text-4xl font-bold tracking-tight sm:text-4xl drop-shadow-md">GET IN TOUCH</h2>
            </div>

            <div className="contact-outer-section">
                <div className="contact-inner-section">
                    <a href="https://www.linkedin.com/in/abdul-naseem-khan-14b429198" className="contact-icon" target='_blank'><FaLinkedin size={30} /></a>
                    <p className="font-bold mt-3">LinkedIn</p>
                    <p className="mt-2">Abdul Naseem Khan</p>
                </div>
                <div className="contact-inner-section">
                    <a href="Mailto:abdulnaseem548@gmail.com" className="contact-icon" target='_blank'><BiLogoGmail size={30} /></a>
                    <p className="font-bold mt-3">Email</p>
                    <p className="mt-2">abdulnaseem548@gmail.com</p>
                </div>
                <div className="contact-inner-section">
                    <a href="Tel:07387190590" className="contact-icon" target='_blank'><IoCall size={30} /></a>
                    <p className="font-bold mt-3">Mobile</p>
                    <p className="mt-2">07387190590</p>
                </div>
            </div>

            {
                isMobile ? <Footer /> : <Footer footer="bottom" />
            }
            
        </>
    )
}

export default Contact;