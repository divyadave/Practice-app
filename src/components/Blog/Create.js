import React from 'react'
import { useHistory } from 'react-router'
import useInput from '../useInput'

export default function Create() {
    const [title, bindTitle, resettitle] = useInput()
    const [body, bindbody, resetbody] = useInput()
    const [author, bindauthor, resetAuthor] = useInput()
    const history = useHistory()

    console.log(bindTitle)

    const createBlog = () => {
        const blog = { title, body, author}
        console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/blogs/')
        })
        resettitle()
        resetbody()
        resetAuthor()
    }
    
    return (
        <div>
           <div className="create">
      <h2>Add a New Blog</h2>
    
    <form>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          {...bindTitle}
        />
        <label>Blog body:</label>
        <textarea
          required
          {...bindbody}
        ></textarea>
        <label>Blog author:</label>
        <select
         {...bindauthor}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button type="button" onClick={() => createBlog()}>Add Blog</button>
      </form>
      </div>
        </div>
    )
}
