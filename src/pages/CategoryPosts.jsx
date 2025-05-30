import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from '../components/PostItem'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CategoryPosts = () => {
  const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const {category} = useParams()

    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${BASE_URL}/posts/categories/${category}`)
          setPosts(response?.data)
        } catch (error) {
          console.log(error)
        }

        setIsLoading(false)
      }
      fetchPosts();
    },[category])

    if(isLoading) {
      return <Loader />
    }

  return (
    <section className='posts'>
       {posts.length > 0 ? <div className="container posts__container">
          {
              posts.map(({_id: id, thumbnail, category, title, description, creator, createdAt }) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt} />
              )            
          }
        </div> : <h2 className='center'>No posts found!</h2> }
    </section>
  )
}

export default CategoryPosts