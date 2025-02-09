import './App.css'
import Search from './Component/Search'
import background from "./Component/Images/background.png"

function App() {
  return (
    <>
      <img className='background' src={background} />
      <Search /> 
      <div className="content">
        
      </div>
    </>
  )
}

export default App
