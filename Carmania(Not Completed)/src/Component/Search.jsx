import React, { useEffect, useState } from 'react'
import getApi from '../Service/GetApi.jsx'
import "./Styles/search.css"
import icon from "./Images/Icons/search.png"

function Search() {
    const someInitialValues = [
        "Search",
        "Search -> music",
        "Search -> latest",
        "Search -> bollywood",
        "Search -> trending"
    ]
    let data = getApi();
    const [ placeValue , setPlaceValue ] = useState("Search")
    const [ value , setValue ] = useState("")
    const datalist = data

    useEffect( () => {
        if( value == "" ){
            setInterval( () => {
                setPlaceValue( 
                    someInitialValues[
                        Math.floor( Math.random() * someInitialValues.length )
                    ] 
                )
            } , 2000 )
        }
    } , [] )
  return (
    <>
        <div className="searchBox">
            <div className='searchIconBox'>
                <img className='searchicon' src={icon} />
            </div>
            <input className='searchInput' type='text' 
                placeholder={ placeValue } 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                list='datalist'
            />
            <datalist id='datalist'>
                {
                    datalist.map( ( v , i ) => (
                        <option key={i} value={v.name}></option>
                    ) )
                }
            </datalist>
        </div>
    </>
  )
}

export default Search