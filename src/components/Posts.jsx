import React, { useState } from 'react'
import PostItem from './PostItem'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: 'education',
    title: 'How to learn React',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: 'science',
    title: 'How to learn Physics',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    authorID: 1
  },
  {
    id: '3',
    thumbnail: Thumbnail3,
    category: 'weather',
    title: 'How to learn Weather',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    authorID: 13
  },
  {
    id: '4',
    thumbnail: Thumbnail4,
    category: 'farming',
    title: 'How to learn Farming',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    authorID: '3'
  },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        <div className="container posts__container">
          {
              posts.map(({ id, thumbnail, category, title, desc, authorID }) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />
              )            
          }
        </div>
    </section>
  )
}

export default Posts