import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import axios from 'axios'

const PostAuthor = ({authorID, createdAt}) => {
  const [author, setAuthor] = React.useState({})

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${authorID}`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <Link to={'/posts/users/sdfsdf'} className='post__author'>
      <div className="post__author-avatar">
        <img src={Avatar} alt="avatar"/>
      </div>
      <div className="post__author-details">
        <h5>John Doe</h5>
        <small>2 h ago</small>
      </div>
    </Link>
  )
}

export default PostAuthor