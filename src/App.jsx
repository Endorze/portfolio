import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""}/>
        <Route path="/about" element={""}/>
        <Route path="/contact" element={""}/>
        <Route path="/news" element={""}/>
        <Route path="/shop" element={""}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
