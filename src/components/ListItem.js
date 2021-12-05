import React from 'react'

export default function ListItem({item, onRemove}) {
    return (
        <div>
            <li>
                {item.name }
                <button type="button" onClick={onRemove(item.id)}>Remove</button>
            </li>
        </div>
    )
}
