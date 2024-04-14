// Get the mean value of the soil property at the queried location and depth
// bulk density details
import axios from 'axios';
import soilImage from "./soil.jpg"; // Adjust the path to match your file structure
import soilcss from "./soilcss.css"; 
import { useState, useEffect } from "react";

const Soil = () => {

  const [address, setAddress] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const handleGeocode = async () => {
      try {
          const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDs7aOnJ_NLUgzXRZspzdB5fbPUw-k1An0`);
          const data = response.data;
          if (data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
              setLat(lat);
              setLng(lng);
          } else {
              console.error("No location found");
          }
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };


  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bulkDensity = await fetchDataFromAPI("bdod", "Bulk Density");
      const cationExchangeCapacity = await fetchDataFromAPI(
        "cec",
        "Cation Exchange Capacity"
      );
      const coarseFragments = await fetchDataFromAPI(
        "cfvo",
        "Coarse Fragments"
      );
      const clay = await fetchDataFromAPI("clay", "Clay");
      const nitrogen = await fetchDataFromAPI("nitrogen", "Nitrogen");
      const organicCarbonDensity = await fetchDataFromAPI(
        "ocd",
        "Organic Carbon Density"
      );
      const pHWater = await fetchDataFromAPI("phh2o", "pH Water");
      const sand = await fetchDataFromAPI("sand", "Sand");
      const soilOrganicCarbon = await fetchDataFromAPI(
        "soc",
        "Soil Organic Carbon"
      );

      setSoilData([
        bulkDensity,
        cationExchangeCapacity,
        coarseFragments,
        clay,
        nitrogen,
        organicCarbonDensity,
        pHWater,
        sand,
        soilOrganicCarbon,
      ]);
    } catch (error) {
      console.error("Error fetching soil data:", error);
    }
  };

  const fetchDataFromAPI = async (properties, propertyName) => {
    const response = await fetch(
      "https://api-test.openepi.io/soil/property?" +
        new URLSearchParams({
          lon: "11.58",
          lat: "65.1",
          depths: "0-5cm",
          properties: properties,
          values: "mean",
        })
    );
    const data = await response.json();
    return processData(data, propertyName);
  };

  const processData = (data, propertyName) => {
    const property = data.properties.layers[0];
    const unit = property.unit_measure.mapped_units;
    const name = property.name;
    const value = property.depths[0].values.mean;
    console.log(
      `Soil property (${propertyName}): ${name}, Value: ${value} ${unit}`
    );
    return { name: propertyName, value: value };
  };

  return (
    <div className="soil">
      <div className="heading">
        <h1>SOIL REPORT</h1>
      </div>
      <div className='soil-search'>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
            />
            <button onClick={handleGeocode}>Search </button>
            {/* {lat && lng && (
                <div>
                    <p>Latitude: {lat}</p>
                    <p>Longitude: {lng}</p>
                </div>
            )} */}
        </div>
      <div className="soil-body">
      <div className="soil-img">
        <img src={soilImage} alt="Soil" className="soil-image" />
      </div>

      <div className="card">
        <div className="header">
          <span className="title">Properties of</span>
          <span className="price">Soil</span>
        </div>
        <p className="desc"> Showing Real-time data of the soil </p>
        <ul className="lists">
          {soilData.map((property, index) => (
            <li key={index} className="list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{property.name}</span>: {property.value} {property.unit} 
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Soil;
