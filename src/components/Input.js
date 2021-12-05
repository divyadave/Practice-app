import React from 'react'
import useInput from './useInput'

function Input() {
    const [firstName, bindFirstName, resetFirstName] = useInput()
    const [lastName, bindLastName, resetLastName] = useInput()


    
    const submitHandler =  (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input type="text"
                {...bindFirstName}
                 ></input>
                <label>Last Name</label>
                <input type="text"
                { ...bindLastName } ></input>
                <button type="button" onClick={submitHandler}> Submit </button>
            </form>
            
        </div>
    )
}

export default Input
