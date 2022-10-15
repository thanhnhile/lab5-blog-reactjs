import React from 'react'
import { useNavigate } from 'react-router-dom';

const PostItem = ({ post, handleDelete }) => {
  const { id, title, content } = post;
  const navigate = useNavigate();
  const handleClickTitle = () => {
    navigate('/' + id);
  }
  const handleCLickEdit = () => {
    navigate('/edit/' + id);
  }
  return (
    <li className='post-item'>
      <h4
        onClick={handleClickTitle}
      >{title}</h4>
      <p>{content}</p>
      <button className='btn del' onClick={() => handleDelete(id)}>Delete</button>
      <button className='btn edit' onClick={handleCLickEdit}>Edit</button>
    </li>
  )
}

export default PostItem;