import React, {useEffect, useContext, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/thumbnail.jpg'
import {UserContext} from '../context/UserContext'
import DeletePost from '../pages/DeletePost'
import Loader from '../components/Loader'
import axios from 'axios'

const ASSEST_URL = process.env.REACT_APP_ASSETS_URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(() => {
const getPost = async () => {
  setIsLoading(true)
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`)
    setPost(response.data)
  } catch (error) {
    setError(error.message)
  }
  setIsLoading(false)
}

getPost()

  },[id, setPost])

  if(isLoading) {
    return <Loader />
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          {currentUser?.id === post?.creator && <div className="post-detail__buttons">
            <Link to={'/posts/werwer/edit'} className="btn sm primary">Edit</Link>
            <DeletePost postId={id}/>
          </div>}
        </div>
        <h1>{post.title}</h1>
        <div className="post-detail__thumbnail">
          <img src={`${ASSEST_URL}/uploads/${post.thumbnail}`} alt="Thumbanil" />
        </div>
        <p dangerouslySetInnerHTML={{__html:post.description}}></p>
      </div>}
    </section>
  
  )
}

export default PostDetail