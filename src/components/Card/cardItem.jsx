import './card.css';


const CardItem = ({ cName, image, title, text, link, linkText }) => {
    return (
        <>
            <div className={`card-item ${cName} text-center`}>
                <img className='card-image' src={image} alt="" />
                <h3 className='card-heading text-xl font-bold sm:text-xl'>{title}</h3>
                <p className='card-text' dangerouslySetInnerHTML={{ __html: text }} />
                <a className="card-view font-bold" href={link} target='_blank'>{linkText}</a>
            </div>
        </>
    )
}

export default CardItem;