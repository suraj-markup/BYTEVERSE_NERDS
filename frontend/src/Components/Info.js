import React from "react";
import InformationCard from "./InformationCard";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring farming to your convenience, offering a comprehensive
          range of on-demand farming services tailored to your needs. Our
          platform allows you to get information about the type of crop suitable for your particular area, 
          gives environment analysis,weather report, soil quality, pollen information, air quality in terms of AQI and crop disease
           detection through our extensive date of 87k+ datasets.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Detect Disease"
          description="This service allows you to detect the type of disease that the crop in your land may be facing.With our AI model trained with more 
          than 87k+ of dataset allows you to accuartely identify the kind of disease that your crop may be facing to take necessay actions to avoid any farming losses.
          In the plant disease detection feature, he/she takes a photo of
          the affected plants and uploads it to the website. The app
          quickly identifies the disease and provides
          recommendations for treatment, including organic
          remedies and pesticide options."
          icon={faLeaf}
        />

        <InformationCard
          title="Air Quality and Pollen Information"
          description="Using state-of-the-art technology to give infomation about the air quality for land location. Providing comprehensive details from the amount of N02 , Ozone, pollutant and its air concentration
            to the AQI, the feature tells about the air quality of the particular day by just inputting your latitude, longitude or your location or postal address.The pollen feature give information about the different pollen in the air and accurately return the risk levels involve with each pollen type to avoid certain type of crop to be sown on the particular dy or area."
          icon={faGlobeAfrica}
        />

        <InformationCard
          title="Weather Report and Soil Report"
          description="The feature gives information like air temperature, dew point, amount of humidity, sea-level pressures, 
          wind speed , wind dust, visibiltyand many more to accuartely predict the date of sowing , harvesting , irrigating etc. by just typing in your land location.
          The feature also provides information about soil temperature and soil moisture to help according to the loaction to predict the type of 
          crop that cold be grown on that particular land type."
          icon={faLeaf}
        />
        
        
        
        
      </div>
    </div>
  );
}

export default Info;