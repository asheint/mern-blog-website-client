import React, {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const DeletePost = () => {

  const navigate = useNavigate()

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token

  // redirect if user is not logged in
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token])

  return (
    <div>DeletePost</div>
  )
}

export default DeletePost