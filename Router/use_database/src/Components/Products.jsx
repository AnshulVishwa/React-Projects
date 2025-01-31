import React from 'react'
import { useParams } from 'react-router'
import DATA from '../Database/DATA'

function Products() {
    const id = useParams().id
    const result = DATA.filter( (v) => v.id === id )
    if( result.length == 0 || !result || result == null ) return window.location.href = "/404NotFound"
  return (
    <h1>{result[0].name}</h1>
  )
}

export default Products