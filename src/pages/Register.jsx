import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value}
    })
  }

  const registerUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, userData)
      const newUser = await response.data
      console.log(newUser);
      if(!newUser) {
        setError("Couldn't register userData. Please try again.")
      }
      navigate('/login')
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <section className="register">
      <div className="container">
        <h2>
          Sign Up
        </h2>
        <form  className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="text" placeholder="Full Name" name='name' value={userData.name} onChange={changeInputHandle} />
          <input type="text" placeholder="Email" name='email' value={userData.email} onChange={changeInputHandle} />
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInputHandle} />
          <input type="password" placeholder="Confirm Password" name='password2' value={userData.password2} onChange={changeInputHandle} />
          <button type="submit" className='btn primary'>Register</button>
        </form>
        <small>Already have an account ? <Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register