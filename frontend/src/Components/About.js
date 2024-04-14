import React from "react";
import Farmer3 from "../Assests/Farmer3.jpg";
import Farmer4 from "../Assests/farmer4.jpg";

import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Farmer3} alt="women farmer" className="about-image1" />
      </div>
      

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to AnnVirdhi, your trusted partner for accessible farming facilities. 
          Our expert services offer all services that the various information that a farmer requires before laying his/her land for farming, prioritizing the produce. Join us on
          this journey towards making our nation's farmer smarter .
        </p>

        <h4 className="about-text-title">Ways to use the platform effectively</h4>

        <SolutionStep
          title="Sowing"
          description=": AnnVirdhi provides farmers with a
          personalized sowing calendar based on his location
          and soil type."
        />

        <SolutionStep
          title="Crop Recommendation"
          description=" To improve soil health and
          increase farmers income. The app analyzes the land
          soil and to suggest suitable crop rotations or intercropping
          options based on location, soil type, and climate
          conditions."
        />

        <SolutionStep
          title="Get the Weather report"
          description="To ensure optimal crop growth, farmer relies on
          real-time weather and environmental data provided by
          the app's API support. which gives all information like soil, pollen, fire alert,
          air quality, water vapour and weather
          information.
          "
        />
        <SolutionStep
          title="Plant disease Detection"
          description="If Farmer notices some
          unusual spots on the leaves of his plants. Using the
          plant disease detection feature, he/she takes a photo of
          the affected plants and uploads it to the website. The app
          quickly identifies the disease and provides
          recommendations for treatment, including organic
          remedies and pesticide options."
        />
      </div>
      
    </div>
  );
}

export default About;