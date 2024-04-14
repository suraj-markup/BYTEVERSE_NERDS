import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetectDisease from "./Pages/DetectDisease";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LeafPage" element={<DetectDisease />} />

          

          
        </Routes>
      </Router>
        
      </header>
      
    </div>
    
  );
}

export default App;
