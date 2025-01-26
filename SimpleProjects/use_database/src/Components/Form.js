import React, { useState } from 'react'
import Submit from './SubmitFunc.js'

function Form() {
    const [ name , setName ] = useState(null)
    const [ email , setEmail ] = useState(null)
    const [ password , setPassword ] = useState(null)
  return (
    <form>
        <div className='name'>
            <label>Enter your name </label>
            <input type='text' name='username' value={name} onChange={(e) => {setName(e.target.value)} } />
        </div>
        <div className='email'>
            <label>Enter your email </label>
            <input type='text' name='email' value={email} onChange={(e) => {setEmail(e.target.value)} } />
        </div>
        <div className='password'>
            <label>Create password </label>
            <input type='text' name='password' value={password} onChange={(e) => {setPassword(e.target.value)} } />
        </div>
        <Submit username={name} email={email} password={password} />
    </form>
  )
}

export default Form