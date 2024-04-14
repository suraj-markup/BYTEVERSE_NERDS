import FeatureCard from "./FeatureCard";
// import Data from "../Data";
import "../"

const list=[
  
    {
        id: "2",
        name:'Soil Details',
        des: "Soil API gives access to real-time soil moisture and soil temperature levels of any given location in the world by latitude and longitude. ",
        color:"#d3e0f7",
        link:"/soil",

    },
    {
        id: "3",
        name:'Air Quality',
        des: "Air Quality API helps you to get real-time hyper local air quality data for over a million postal codes across 90+ countries, cities, and latitude & longitude. Air quality data helps quantify ambient air pollution. ",
        color:"#F7F4E5",
        link:"/air",


    },
    
    
    {
        id: "5",
        name:'Weather',
        des: "Weather API gives access to real-time local weather updates for temperature, pressure, humidity, wind, cloud coverage, and visibility of any location in the world by latitude and longitude. These parameters affect the crops. Our data can play a key role in agriculture sector.",
        color:"#cff0da",
        link:"/weather",

    
    },
   
]

const Features=()=>{
    return (
        <div className="feature-body ">
            <div className="heading">
                
                <h1 className="">Analyse field performance With </h1>
                
                <p>We spend a lot of time perfecting our boundaries adn seeded acres data which is the basis for all precision ag-services <br/>
               and in-field analytics. We provide different API datas and AI solution so you can easily optimize your agricultural operations.</p>
                
                
            </div>
            <div className="feature-container">
                {list.map((feature)=>(
                    <FeatureCard key={feature.id} cardData={feature}/>
                ))}
            </div>


            

        </div>

    );
};

export default Features;