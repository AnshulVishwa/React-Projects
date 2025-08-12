import { useState } from 'react'
import './App.css'
import C1 from './Templates/c1'

function App() {
  const details = {
    name : "Mr. Arpit Vishwakarma",
    eventName : "Hackathon",
    pos : "Certificate of Completion",
    reason : "For Beautifully desingning a website",
    logo : "/logo.png"
  }
  return (
    <>
      <C1 {...details} />
    </>
  )
}

export default App
