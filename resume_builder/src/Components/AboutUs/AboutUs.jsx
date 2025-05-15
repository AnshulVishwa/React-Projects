import React, { useEffect } from 'react'
import "./AboutUs.css"

function AboutUs() {
  useEffect( () => {
    setInterval(() => {
      document.querySelector(".manBehind").style.transform = `translate3d(${Math.random()*10}em,${Math.random()*10}em,${Math.random()*10}em) rotate(${Math.random()*10}deg)`
    }, 4000);
  } , [] )
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
          <div className="leftAboutUs flex">
            <div className="textAboutUs">
              <div className="text">We are a passionate team dedicated to creating meaningful digital experiences. With a focus on creativity, quality, and innovation, we turn ideas into impactful solutions that inspire and engage.</div>
            </div>
            <div className="optionsBottomAboutUs flex">
              <div className="reviewsAboutUs flex">
                <div className="numberAboutUs">25 K</div>
                <div className="textNumberAboutUs">Good Reviews</div>
              </div>
              <div className="reviewsAboutUs flex">
                <div className="numberAboutUs">4</div>
                <div className="textNumberAboutUs">Templates</div>
              </div>
              <div className="reviewsAboutUs flex">
                <div className="numberAboutUs">79%</div>
                <div className="textNumberAboutUs">Selection Rate</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
