import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, category, title, description, thumbnail, authorID }) => {
  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={thumbnail} alt='thumbnail' />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem;
