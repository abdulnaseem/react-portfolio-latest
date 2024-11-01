import './card.css';
import CardItem from './cardItem';


const Card = ({data}) => {

    return (
        <>  
            <div className='card'>
                {
                    data.map((data) => {
                        return <CardItem key={data.id} 
                                    cName={data.cName} 
                                    image={data?.image} 
                                    title={data.title} 
                                    text={data.text} 
                                    link={data.link} 
                                    linkText={data.linkText}
                                    video={data?.video} />
                    })
                }
            </div>
        </>
    )
}

export default Card;