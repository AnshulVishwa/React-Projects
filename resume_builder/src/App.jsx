import { useEffect } from 'react'
import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Navbar from './Components/Navbar/navbar'

function App() {

  useEffect( () => {
    document.querySelector(".upperSVG").style.transform = `translate3d(${Math.random() * 20}em, ${Math.random() * 10}em, ${Math.random() * 20}em)`;
    setInterval( () => {
      document.querySelector(".upperSVG").style.transform = `translate3d(${Math.random() * 20}em, ${Math.random() * 10}em, ${Math.random() * 20}em)`;
    } , 5000 )
  } , [] )

  return (
    <>
      <img className='upperSVG' src="Group 2.svg" />
      <div className="section1Top">
        <Navbar />
        <div className="contentMiddle flex hideAtStart">
          <div className="contentDIVBOX flex">
            <div className="spanHead1 shine-effect">Design Build</div>
            <div className="spanHead2 shine-effect">Get Hired</div>
            <div className="spanHead3 flex shine-effect">
              Your career starts with a powerful resume.
              <div className='line'></div>
            </div>
          </div>
          <div className="buttonGetStarted">
            <button onClick={() => {
              document.querySelector("#aboutUs")?.scrollIntoView({behavior : "smooth"})
            }} className='btnGetStarted flex'>Get Started 
              <i className='fa-solid fa-chevron-right'></i>
            </button>
          </div>
        </div>
      </div>
      <div className="section2Middle">
        <AboutUs />
      </div>
    </>
  )
}

export default App
