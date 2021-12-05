import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from '../useFetch';

function BlogDetials() {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, error} =  useFetch('http://localhost:8000/blogs/' + id)
    const onDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/blogs/')
        })
    }

    return (
        <div className="blog-details"> 
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        {
            blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button type="button" onClick={onDelete}>Delete Blog</button>
                </article>

            )
        }
        
            
        </div>
    )
}

export default BlogDetials
