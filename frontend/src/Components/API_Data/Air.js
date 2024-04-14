import React, { useEffect, useState } from "react";
// import GeocodeComponent from './Component/GeocodeComponent';
import Navbar from "../Navbar";
import axios from "axios";
import Footer from "../Footer";
import aircss from "./aircss.css"; 
import airImg from "./air.jpg"; // Adjust the path to match your file structure

const Air = () => {

  
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




  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/air");
      const json = await response.json();
      console.log(json);
      setData(json.stations[0]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  const selectedProperties = [
    "AQI",
    "aqiInfo",
    "CO",
    "NO2",
    "OZONE",
    "PM10",
    "SO2",
    "city",
  ];

  // Filter the data object to only include the selected properties
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key]) => selectedProperties.includes(key))
  );

  // Convert the filtered data into key-value pairs
  const keyValuePairs = Object.entries(filteredData);
  

  return (
  <div>
      <Navbar/>
    <div className="air">
      <div className="heading">
        <h1>AIR REPORT</h1>
      </div>
      <div className='air-search'>
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
      <div className="air-body">
        <div className="air-img">
          <img src={airImg} alt="air" className="air-image" />
        </div>

        <div className="card">
          <div className="header">
            <span className="title">Properties of Air</span>
            <span className="price">Air</span>
          </div>
          <p className="desc">Showing Real-time data of the air</p>
          <ul className="lists">
            
            {keyValuePairs.map(([key, value]) => (
                // if (isLoading) {
                //   return <p>Loading...</p>;
                // }

                // if (error) {
                //   return <p>Error: {error.message}</p>;
                // }
              <li key={key} className="list">
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
                <strong>{key}:</strong>{" "}
                {typeof value === "object" ? (
                  <ul>
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <li key={subKey}>
                        <p>
                          {subKey}: {subValue}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </div>
);
};

export default Air;
