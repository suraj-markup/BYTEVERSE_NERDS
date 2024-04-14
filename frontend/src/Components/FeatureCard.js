const FeatureCard = (props) => {
    const {cardData}=props;
    const {name,des,color,link}=cardData;
    return (
        <div >
        
        <div className="card-container" style={{ backgroundColor: color }}>
      
            <a href={link}>
                <h3 className="">{name}</h3>
            </a>
            <p className="">{des}</p>
            
        </div>

        </div>
    )


};

export default FeatureCard;