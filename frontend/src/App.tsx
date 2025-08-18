import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home/home";

import './App.css'
import HeaderLayout from "./components/HeaderLayout/headerLayout";


function App() {

  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
