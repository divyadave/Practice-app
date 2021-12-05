import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import List from './List';

export default function ComponentD() {
    const [users, setUsers] = useState([
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
    ])
    const [text, setText] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleUser = () => {
        setUsers(users.concat({id: uuidv4(), name: text}))
    }
    const handleRemove = React.useCallback( (id) => {
        setUsers(users.filter((user) => user.id === id))
    }, [users])

    return (
        <div>
            <input type="text" value={text} onChange={handleText}></input>
            <button type="button" onClick={handleUser}>Add User</button>
            <List list={users} onRemove={handleRemove}></List>
            
        </div>
    )
}
