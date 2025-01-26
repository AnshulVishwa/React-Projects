import React from 'react'

function Form() {
  return (
    <form>
        <div className='name'>
            <label>Enter your name </label>
            <input type='text' name='username' />
        </div>
        <div className='email'>
            <label>Enter your email </label>
            <input type='text' name='email' />
        </div>
        <div className='password'>
            <label>Create password </label>
            <input type='text' name='password' />
        </div>
        <button onClick={ (e) => {
            e.preventDefault()
        } }>Submit</button>
    </form>
  )
}

export default Form