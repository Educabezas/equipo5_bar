import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DrinksDetail } from "./pages/DrinksDetail"
//import { useState } from 'react'

import './App.css'

export const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <header>
      <Link to = "/">
      <h1 className="title"> Taaaragos</h1>
      </Link>
    </header>

    <Routes>
      <Route path = "/" element = {<LandingPage/>} /> 
      <Route path = "/tragos/:tragosId" element = { <DrinksDetail/> } />      
    </Routes>

    </BrowserRouter>
    </>


  )
}
