import React from 'react'
import "../Styles/content.css"
import API from '../../API'

function Content() {
  return (
    <div className='centerContent'>
        <div className="options">
            <div className="left">
                <div className="spacingLeft">
                    <button className="optionButtons">Trending</button>
                    <button className="optionButtons">Trending</button>
                </div>
            </div>
            <div className="right">
                <div className="spacingRight">
                <button className="optionButtons">Trending</button>
                <button className="optionButtons">Trending</button>
                </div>
            </div>
        </div>
        <div className='mainContent'>
            {
                API.map( ( v ) => ( 
                    <div className='box'>{v.name}</div>
                 ) )
            }
        </div>
    </div>
  )
}

export default Content