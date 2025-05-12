import './App.css'
import Navbar from './Components/Navbar/navbar'

function App() {

  return (
    <>
      <img className='upperSVG' src="Group 2.svg" />
      <div className="section1Top">
        <Navbar />
        <div className="contentMiddle flex">
          <div className="spanHead1">Design Build</div>
          <div className="spanHead2">Get Hired</div>
          <div className="spanHead3">
            Your career starts with a powerful resume.
            <div className='line'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
