import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/sdfsdf'} className='post__author'>
      <div className="post__author-avatar">
        <img src={Avatar} alt="avatar"/>
      </div>
      <div className="post__author-details">
        <h5>By: John Doe</h5>
        <small>2 hours ago</small>
      </div>
    </Link>
  )
}

export default PostAuthor