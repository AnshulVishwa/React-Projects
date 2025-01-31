import React from 'react'
import { useParams } from 'react-router'

function Dynamic() {
    const path = useParams()
    console.log(path.dynamic)
  return (
    <h1>Hello {path.dynamic}</h1>
  )
}

export default Dynamic