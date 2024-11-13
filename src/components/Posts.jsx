import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import Loader from './Loader'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${BASE_URL}/posts`)
          setPosts(response?.data)
        } catch (error) {
          console.log(error)
        }

        setIsLoading(false)
      }
      fetchPosts();
    },[])

    if(isLoading) {
      return <Loader />
    }

  return (
    <section className='posts'>
       {posts.length > 0 ? <div className="container posts__container">
          {
              posts.map(({ id, thumbnail, category, title, description, authorID, createdAt }) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} createdAt={createdAt} />
              )            
          }
        </div> : <h2 className='center'>No posts found!</h2> }
    </section>
  )
}

export default Posts