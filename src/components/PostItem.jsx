import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PostItem = ({ postID, category, title, description, authorID, thumbnail, createdAt }) => {
    const shortDescription = description.length > 145 ? description.substring(0, 145) + '...' : description;
    const postTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;
  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={`${BASE_URL}/uploads/${thumbnail}`} alt={title} />
            console.log(`${BASE_URL}/uploads/${thumbnail}`);

        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem;
