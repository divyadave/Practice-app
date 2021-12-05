import React from 'react'

 function Button(props) {
    console.log('Button component is rendered')
    return (
        <div>
            <button onClick={props.addNote}>Add</button>
            
        </div>
    )
}
export default React.memo(Button)