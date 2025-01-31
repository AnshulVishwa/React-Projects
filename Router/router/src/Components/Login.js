import React from 'react'

function Login() {
  return (
    <>
        <h1>Login</h1>
        <div className='loginForm'>
            <div className='username'>
                <input type='text' placeholder='Enter your name'></input>
            </div>
            <button>
                <a href='/about'>Login</a>
            </button>
        </div>
    </>
  )
}

export default Login