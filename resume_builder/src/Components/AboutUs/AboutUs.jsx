import React from 'react'
import "./AboutUs.css"

function AboutUs() {
  return (
    <div id='aboutUs' className="aboutUsMainContentDiv">
        <h1 className='aboutUsHeading flex'>About us</h1>
        <h3 className='whatWeOffer flex'>What we offer?</h3>
        <div className="optionsAboutUs flex">
          <div className="glowingDibba">Professional Resume Templates</div>
          <div className="glowingDibba">Easy-to-Use Editor</div>
          <div className="glowingDibba">Multiple Format Exports</div>
          <div className="glowingDibba">ATS-Friendly Resumes</div>
        </div>
        <div className="bottomContentAboutUs flex">
          <div className="man">
            <img className='manBehind' src='/man-behind.svg'></img>
            <img className='manAboutUs' src='/man.svg'></img>
          </div>
          <div className="textAboutUs">
            <div className="text">We are a passionate team dedicated to creating meaningful digital experiences. With a focus on creativity, quality, and innovation, we turn ideas into impactful solutions that inspire and engage.</div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
