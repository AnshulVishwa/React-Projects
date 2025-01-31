import './App.css';
import Dynamic from './Components/Dynamic';
import Login from './Components/Login';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className='flex'>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path='/about' element = {<Main />}></Route>
            <Route path='/login' element = { <Login/>} ></Route>
            <Route path='/:dynamic' element = { <Dynamic /> } ></Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
