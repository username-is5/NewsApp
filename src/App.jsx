import Navbar from "./Components/Navbar"
import NewsCard from "./Components/NewsCard"
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  let api="https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default App
