import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import News from "./pages/News/news";
import Shop from "./pages/Shop/shop";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
