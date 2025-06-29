import { useState, useEffect } from "react";
import './App.css';

import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showEye, setShowEye] = useState(false); 
  const [eye, setEye] = useState("fa-solid fa-eye-slash");

  useEffect(() => {
    setEye(showEye ? "fa-solid fa-eye" : "fa-solid fa-eye-slash");
  }, [showEye]);

  const [ password , setPassword ] = useState("")

  return (
    <>
    <img src="/bg.jpg"></img>
      <header>Login page</header>
      <main>
        <div className="fields">
          <div>
            <label htmlFor="username">Username: </label>
            <input name="username" />
          </div>
            <div className="input">
              <label htmlFor="password">Password: </label>
              <input type={showEye ? "text" : "password"} value={password} onChange={ (e) => setPassword(e.target.value) } name="password" />
              <i onClick={() => setShowEye(!showEye)} className={eye}></i>
            </div>
        </div>
        <div className="forgotPass">
          <span>Forgot Password?</span>
          <button onClick={(e)=>{
            e.preventDefault()
            let val = password
            if( val.length < 15 ) toast.error("The Password should contain at least 15 characters")
            const special_characters = /[@#$\\_]/
            if( !special_characters.test(val) ) toast.error("The pass should contain at least one special character")

            if( !val.split("").filter( ( v ) => v == Number ) ) toast.error("Your Password should contain at least 1 integer")

          }} >Login</button>
        </div>
      </main>
      <footer>Powered by ~ Anshul Vishwakarma</footer>
      <ToastContainer/>
    </>
  );
}

export default App;
