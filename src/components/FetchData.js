import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'


function FetchData() {
    const [posts, setPost] = useState([])
    const [id, setId] = useState(1)
    const [postId, idButton] = useState(1)

    const handler = () => {
        idButton(id)

    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => {
            setPost(res.data)

        })
        .catch(err => {
            console.log(err)

        })
    }, [postId])
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={handler}>Fetch Post</button>
            { posts.title}
            {/* {
                posts.map(post => (
                    <li key={post.id}>{ post.title}</li>
                ))
            }
             */}
        </div>
    )
}

export default FetchData
