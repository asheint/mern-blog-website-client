import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
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
    <Link className="btn sm danger">
      Delete
    </Link>
  )
}

export default DeletePost