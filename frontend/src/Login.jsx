import { useState } from 'react'
import './style.css'
import axios from 'axios'

const Login = () => {
    const [values, setValues] =useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className="bg-white p-3 rounded w-25 border">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input onChange={e => {setValues({...values,email: e.target.value })}}  type="email" placeholder='Enter Email' name='email' className='form-control rounded-0' />
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input onChange={e => {setValues({...values, password: e.target.value })}} type="password" placeholder='Enter Password' name='password' className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>
                Log in 
            </button>
            <p>You agree to our T&C</p>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-underline'>
                Create Account
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login
  