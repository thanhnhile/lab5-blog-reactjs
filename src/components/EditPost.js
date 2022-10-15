import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const [post, setPost] = useState({ title: ' ', content: ' ', comments: [] });
    useEffect(() => {
        const post = posts.find(p => p.id === Number.parseInt(id));
        setPost(post);
    }, [])
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = window.confirm('Are you sure you want to save post');
        if (answer) {
            setPosts(prev => {
                const temp = [...prev];
                const index = prev.findIndex(p => p.id === Number.parseInt(id));
                temp[index] = post;
                return temp;
            })
            navigate('/')
        }

    }
    const handleChange = (e) => {
        setPost(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }
    return (
        <div className='form-wrapper'>
            <h3>Edit Post</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    className='form-control'
                    name='title'
                    value={post.title}
                    onChange={handleChange} />
                <textarea
                    placeholder='Enter at least 20 characters'
                    minLength='20'
                    value={post.content}
                    name='content'
                    onChange={handleChange}></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditPost