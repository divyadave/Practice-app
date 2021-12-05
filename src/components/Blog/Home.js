import React, { useState, useEffect } from 'react'
import useFetch from '../useFetch'
import BlogList from './BlogList'

function Home() {
    const {error, isPending, data : blogs} = useFetch('http://localhost:8000/blogs')
    const [name, setName] = useState('')
   
    /* const handleDelete = (id) => {
        const newblogs  = blogs.filter((blog) => blog.id !== id)
        setBlogs(newblogs)
    } */
 /*    onDelete={handleDelete} */
   
    return (
        <div>
            {error && <div>{error}</div>}
            { isPending && <div>Loading....</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
           {/*  <button onClick={() => setName('luigi')}>change name</button> */}
      {/*       <BlogList blogs={blogs.filter(blog => blog.author ==='mario')} title="Mario Blog"></BlogList> */}
        </div>
    )
}

export default Home
