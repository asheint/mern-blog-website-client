import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const ASSEST_URL = process.env.REACT_APP_ASSETS_URL;

const PostItem = ({ postID, category, title, description, authorID, thumbnail, createdAt }) => {
    const shortDescription = description.length > 145 ? description.substring(0, 145) + '...' : description;
    const postTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;
    const thumbnailUrl = `${ASSEST_URL}/uploads/${thumbnail}`;

  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={thumbnailUrl} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: shortDescription }} />
            <div className="post__footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem;
