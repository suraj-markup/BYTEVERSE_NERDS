// import logo from './logo.svg';
import Features from './Components/Features';
import Home from './Pages/Home';
import Soil from './Components/API_Data/Soil';
import Air from './Components/API_Data/Air';
import Weather from './Components/API_Data/Weather';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import DetectDisease from "./Pages/DetectDisease";



function App() {
  
 
  return (
    <div className="App">
      <header className="App-header">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LeafPage" element={<DetectDisease />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/soil" element={<Soil />} />
          <Route path="/air" element={<Air />} />
          <Route path="/weather" element={<Weather />} />
        
          

          
        </Routes>
      </Router>
        
      </header>
      
    </div>
    
  );
}

export default App;
