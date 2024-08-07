import React, { useEffect, useState } from 'react'

function Table() {
    const [posts, setPosts] = useState([])
    const [newPostId , setNewPostId]=useState('');
    const [editPostId , setEditPostId] = useState(null);
    const [editedPostTitle , setEditedPostTitle]=useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            }
            catch (error) {
                console.error('Error In fetching Posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleAddPost = async ()=>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newPostId}`)
            const data = await response.json();
            const newPost = {
                id: data.id,
                title: data.title
            }
            setPosts([...posts, newPost]);
            setNewPostId('');
        }catch(error) {
            console.error('Error Fetching Post by Id' , error);
        }
    }

    const handleEditPost = (postId) =>{
        setEditPostId(postId);
        const postToEdit = posts.find(post => post.id === postId);
        if(postToEdit){
            setEditedPostTitle(postToEdit.title);
        }
    }

    const handleDeletePost = (postId) =>{
        const updatedPosts = posts.filter(post => post.id !== postId)
        setPosts(updatedPosts);
    }

    const handleSaveEdit = () =>{
        const updatedPosts = posts.map(post => {
            if(post.id === editPostId){
                return{
                    ...post,
                    title: editedPostTitle
                };
            }
            return post;
        })
        setPosts(updatedPosts)
        setEditPostId(null);
        setEditedPostTitle('');
    }



    return (
        <div className='container'>
            <div className='input-box'>
                <input type='text'
                placeholder='Enter Post Id'
                className='placeholder'
                value={newPostId}
                onChange={(e)=>setNewPostId(e.target.value)} />
                <button className='AddPostBtn' onClick={handleAddPost} >Add Post</button>
            </div>
            <table className='table'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='id'>ID</th>
                        <th className='title'>Title</th>
                        <th className='action'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td className='postid'>{post.id}</td>
                            <td className='posttitle'>{editPostId === post.id ? (<input type='text' value={editedPostTitle} onChange={(e) => setEditedPostTitle(e.target.value)} className='posttitle' />) : (post.title)}</td>
                            <td className='wd'>
                                {editPostId === post.id ?
                                (<button className='save' onClick={handleSaveEdit}>Save</button>):(<button className='edit' onClick={()=>handleEditPost(post.id)}>Edit</button>)
                                }
                                <button className='delete' onClick={()=>handleDeletePost(post.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table