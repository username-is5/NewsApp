import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [progress, setProgress] = useState(0)
  const [country, setCountry] = useState("in")
  return (
    <>
    <Router>
      <Navbar country={country} setCountry={setCountry}/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key={`general-${country}`} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key={`business-${country}`} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key={`entertainmentl-${country}`} country={country} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key={`health-${country}`} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key={`science-${country}`}country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key={`sports-${country}`} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key={`technology-${country}`} country={country} category="technology" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
