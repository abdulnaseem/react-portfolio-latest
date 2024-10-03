import './card.css';


const CardItem = ({ 
    icon,
    image, 
    header, 
    text, 
    itemDivStyle,
    itemIconStyle,
    itemHeaderStyle,
    itemTextStyle 
}) => {

    const iconClass = icon === "" ? "" : "grid-card-letter-icon";
    console.log(iconClass)
    return (
        <div className={`grid-item-card ${itemDivStyle}`}>
            <p className={`${iconClass} ${itemIconStyle}`}>{icon}</p>
            <img className='project-image' src={image} />
            <h3 className={`grid-card-header ${itemHeaderStyle}`}>{header}</h3>
            <p className={`grid-card-text ${itemTextStyle} text-sm`}>{text}</p>
        </div>
    )
}

export default CardItem;