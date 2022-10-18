/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../models/models.post';

const PostDetail = ({ posts, setPosts }) => {
    const { id } = useParams();
    const [post, setPost] = useState(new Post());
    const commentInput = useRef();
    useEffect(() => {
        const getPost = () => {
            const result = posts.find(p => p.id === Number.parseInt(id));
            setPost(result);
        }
        getPost();
    }, [])
    const handleComment = (e) => {
        e.preventDefault();
        let newComment = commentInput.current.value;
        if (newComment) {
            post.getComments().push(newComment);
            const newPost = { ...post };
            console.log(newPost)
            const temp = [...posts];
            const index = posts.findIndex(p => p.id === Number.parseInt(id));
            temp[index] = newPost;
            setPosts(temp);
            setPost(newPost);
            commentInput.current.value = '';
        }
    }
    return (
        <div className='wrapper post-detail'>
            <h3>{post ? post.title : ' '}</h3>
            <p>{post ? post.content : ' '}</p>
            <h4>Comments</h4>
            <form onSubmit={handleComment}>
                <input ref={commentInput} type="text" placeholder="Comment here.." name="comment" />
                <button type="submit" className='btn btn-comment'>Send</button>
            </form>
            <ul>
                {
                    post && post.comments.map((commnent, index) => <li key={index} className='comment-item'>{commnent}</li>)
                }
            </ul>
        </div>
    )
}

export default PostDetail