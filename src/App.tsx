import { useState } from 'react'
import Container from './Components/layout/Container'
import LandingPage from './pages/LandingPage'
import blur from './assets/blur.svg'
import grid from './assets/grid.svg'
import Navbar from './Components/layout/Navbar'
import AOS from "aos";
import 'aos/dist/aos.css'; 

function App() {
  AOS.init();

  return (
    <>
      <Container className={"bg-background text-text"}>
        <Navbar/>
        <LandingPage/>
        <img src={grid} alt=""  className=" w-full h-full  object-cover absolute z-0"/>
        <img src={blur} alt=""  className=" w-full h-full opacity-30 object-cover absolute z-0"/>
      </Container>
    </>
  )
}

export default App
