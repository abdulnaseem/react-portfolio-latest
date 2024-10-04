import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import './footer.css';
import { useState } from "react";


const Footer = ({footer}) => {

    const [footerBottom, setFooterBottom] = useState(false);

    let footerStyle = "footer-section";
    if(footer === 'bottom') {
        footerStyle = "footer-section bottom"; 
    }
    console.log(footerStyle);
    return (
        <div className={footerStyle}>
            <div class="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
                <a href="https://www.linkedin.com/in/abdul-naseem-khan-14b429198" class="hi-icon hi-icon-linkedin" target='_blank'><FaLinkedin size={30} /></a>
                <a href="mailto:abdulnaseem548@gmail.com" class="hi-icon hi-icon-gmail" target='_blank'><BiLogoGmail size={30} /></a>
            </div>
        </div>
    )
}

export default Footer;