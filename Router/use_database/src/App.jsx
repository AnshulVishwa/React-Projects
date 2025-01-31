import './App.css'
import Content from './Components/Content';
import NotFound from './Components/NotFound';
import Products from './Components/Products';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
            <Routes>
              <Route path='/' element = { <Content /> } ></Route>
              <Route path='/:id' element = { <Products /> } ></Route>
              <Route path='/404NotFound' element = { <NotFound /> } ></Route>
            </Routes>
    </>
  )
}

export default App
