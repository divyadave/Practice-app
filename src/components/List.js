import React from 'react'
import ListItem from './ListItem'

function List({list, onRemove}) {
    console.log('list is rendered')
    return (
        <div>
            <ul>
                {
                    list.map(user => (
                        <li>
                        {user.name }
                        <button type="button" onClick={onRemove(user.id)}>Remove</button>
                    </li>
                    ))
                }
            </ul>
            
        </div>
    )
}
export default React.memo(List)
