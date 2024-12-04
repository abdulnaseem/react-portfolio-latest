import { Link } from 'react-router-dom';
import './card.css';


const CardItem = ({ cName, image, title, text, link, linkText, video }) => {

    let projectLink = title.split(" ").join("").toLowerCase();

    return (
        <>
            <div className={`card-item ${cName} text-center`}>
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
                        <Link to={projectLink} className="card-view font-bold">{linkText}</Link>
                    ) : (
                        <a className="card-view font-bold" href={link} target='_blank'>{linkText}</a>
                    )
                }
            </div>
        </>
    )
}

export default CardItem;