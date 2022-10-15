import React from 'react'
import PostItem from './PostItem';

const List = ({ posts, setPosts }) => {
    const handleDelete = async (id) => {
        let index = posts.findIndex(post => post.id === id);
        if (index > -1) {
            const answer = window.confirm('Are you sure you want to delete post with id ' + id);
            if (answer) {
                setPosts(prev => {
                    let temp = [...prev];
                    temp.splice(index, 1);
                    return temp;
                })
            }
        }
    }
    return (
        <div className='wrapper'>
            <h3>List Posts</h3>
            <ul>
                {
                    posts && posts.map(post => <PostItem key={post.id} post={post} handleDelete={handleDelete} />)
                }
            </ul>
        </div>
    )
}
export default List;
