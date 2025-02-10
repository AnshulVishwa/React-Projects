import './App.css'
import Search from './Component/Search'
import background from "./Component/Images/background.png"
import Content from './Component/Content/Content'

function App() {
  return (
    <>
      <img className='background' src={background} />
      <Search /> 
      <div className="content">
        <Content />
      </div>
    </>
  )
}

export default App
