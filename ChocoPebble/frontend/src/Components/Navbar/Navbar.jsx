import React from 'react'
import "./Navbar.css"
import logo from "/logo.png"
import { useEffect } from 'react'
import gsap from 'gsap'
function Navbar() {
  useEffect( () => {
    document.querySelector( ".heart" ).addEventListener( "mouseover" , () => {
      gsap.to( ".heart1" , {
        y : -10,
        x : 5,
        scale : 0.5,
        rotate : 30,
        opacity : 1,
        duration : 1
      } )
      gsap.to( ".heart2" , {
        y : -12,
        x : -5,
        scale : 0.7,
        rotate : -30,
        opacity : 1,
        duration : 1
      } )
    } )
    document.querySelector( ".heart" ).addEventListener( "mouseout" , () => {
      gsap.to( ".heart1" , {
        y : 0,
        x : 0,
        rotate : 0,
        scale : 1,
        opacity : 0,
        duration : 1
      } )
      gsap.to( ".heart2" , {
        y : 0,
        x : 0,
        rotate : 0,
        scale : 1,
        opacity : 0,
        duration : 1
      } )
    } )

    document.querySelector( ".cart" ).addEventListener( "mouseover", () => {
      gsap.to( ".cart", {
          x : 7,
          duration : 1,
          opacity : 1,
        } )
        gsap.to( ".cloud", {
          x : -8,
          duration : 1,
          opacity : 1,
          fontSize : "smaller"
      } )
    } )
    document.querySelector( ".cart" ).addEventListener( "mouseout", () => {
        gsap.to( ".cart", {
            x : 0,
            duration : 1,
            opacity : 1
        } )
        gsap.to( ".cloud", {
          x : 0,
          duration : 1,
          opacity : 0,
        } )
    } )
    const navTime = gsap.timeline()
      document.querySelectorAll( ".gsap").forEach( (each) => {
        navTime.fromTo( each , {
          y : -100,
          opacity : 0,
          x : -50,
          duration : 0.05
        },{
          x:0,y:0,opacity:1
        } )
      } )
    } )

  return (
    <>
        <nav className="nav-main flex">
            <section className="nav-main-left flex">
                <div className="logo flex gsap">
                    <img src={logo} className='Choco-Pebble-logo shadow' />
                </div>
            </section>
            <section className="nav-main-center flex">
                <div className="home-text shadow gsap">
                    <span>Home</span>
                </div>
                <div className="about-us-text shadow gsap">
                    <span>About Us</span>
                </div>
                <div className="products shadow gsap">
                    <span>Products</span>
                </div>
                <div className="login-signup shadow gsap">
                    <span>Login/SignUp</span>
                </div>
            </section>
            <section className="nav-main-right flex gsap">
                <div className="shadow home-like flex">
                      <i className="fa-solid fa-heart heart" ></i>
                      <i className="fa-solid fa-heart heart1" ></i>
                      <i className="fa-solid fa-heart heart2" ></i>
                </div>
                <div className="shadow home-cart gsap">
                    <i className="fa-brands fa-opencart cart" ></i>
                    <i class="fa-brands fa-cloudversify cloud"></i>
                </div>
                <div className="shadow home-dot-menu gsap">
                    <span><i className="fa-solid fa-ellipsis-vertical" ></i></span>
                </div>
            </section>
        </nav>
    </>
  )
}

export default Navbar
