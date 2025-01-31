import React from 'react'
import "./style.css"

function Navbar() {
  return (
    <nav>
        <div className='home cursor'>
            <a href='/'>Home</a>
        </div>
        <div className='about cursor'>About us</div>
        <div className='content cursor'>Content</div>
        <div className='login cursor'>Login</div>
    </nav>
  )
}

export default Navbar