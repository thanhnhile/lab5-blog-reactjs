import React, { useRef, useState } from 'react'
import Post from '../models/models.post'

const AddPost = (props) => {
    const getID = useRef(1);
    const [input, setInput] = useState(new Post());
    const { setPosts } = props;
    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.title && input.content.length >= 20) {
            setPosts(prev => {
                let newPost = new Post(getID.current, input.title, input.content);
                getID.current++;
                return [...prev, newPost];
            });
            setInput({ title: '', content: '' });
        }
        else alert('Invalid input');
    }
    return (
        <div className='wrapper'>
            <h3>Add Post</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    className='form-control'
                    name='title'
                    value={input.title}
                    onChange={handleChange} />
                <textarea
                    name="content"
                    placeholder='Enter at least 20 characters'
                    // minLength='20'
                    onChange={handleChange}
                    value={input.content}></textarea>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost