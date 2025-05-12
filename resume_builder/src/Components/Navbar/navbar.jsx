import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <>
        <nav className='flex'>
            <div className="section1">
                ResumeBuilder
            </div>
            <div className="section2 flex">
                <div className="homediv navBox">
                    Home
                </div>
                <div className="aboutusDiv navBox">
                    About us
                </div>
                <div className="templateDiv navBox">
                    Template
                </div>
                <div className="contactDiv navBox">
                    Contact us
                </div>
            </div>
            <div className="section3">
                Login/Signup
            </div>
        </nav>
    </>
  )
}

export default Navbar
