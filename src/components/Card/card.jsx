import './card.css';
import CardItem from './cardItem';


const Card = ({data}) => {

    return (
        <>
            {
                data.map((data) => {
                    return <CardItem key={data.id} 
                                cName={data.cName} 
                                image={data.image} 
                                title={data.title} 
                                text={data.text} 
                                link={data.link} 
                                linkText={data.linkText} />
                })
            }
        </>
    )
}

export default Card;