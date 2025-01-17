import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import './card.css';

const CardItem = ({ cName, image, title, text, link, linkText, video }) => {

    let projectLink = title.split(" ").join("").toLowerCase();

    return (
        <>
            <div className={`card-item ${cName} text-center relative`}>
                {
                    video && (
                        <video controls width="400">
                            <source src={video} type="video/webm" />
                        </video>
                    )
                }
                <img className='card-image' src={image} alt="" />
                <h3 className='card-heading text-xl font-bold sm:text-xl'>{title}</h3>
                <p className='card-text' dangerouslySetInnerHTML={{ __html: text }} />
                
                {
                    linkText === "Read more" ? (
                        <div className="items-center">
                            <Link to={projectLink} className="card-view font-bold">
                                {linkText}
                            </Link>
                            <a
                                className="absolute bottom-0 right-0 mb-5 mr-5 text-blue-600 transform transition-transform duration-300 hover:text-blue-700 hover:scale-125"
                                href="https://beta.talibnotes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink size={20} />
                            </a>
                        </div>
                    ) : (
                        <a className="card-view font-bold" href={link} target='_blank'>{linkText}</a>
                    )
                }
            </div>
        </>
    )
}

export default CardItem;
