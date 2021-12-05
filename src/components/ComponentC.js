import React, {useContext, useState, useCallback, useEffect } from 'react'
import Button from './Button';
import { testContext } from './ComponentA'



function ComponentC(props) {
    console.log('Component C is rendered')
    const [notes, setNotes] = useState([]);
    const [value, setName] = useState('')
    console.log(props.displayname)
   
    const addNote = useCallback(
        () => {
            const newNote = "random"
            setNotes([...notes, newNote])
        },
        [setNotes],
    )
    useEffect(() => {
        setName(props.displayname)
       
    }, [props.displayname])
       
    
    const user = useContext(testContext)
    console.log(user)
    return (
        <div>
            <p>Display Name is: { value }</p>
            <button onClick={() => user.countDispatch('increment')}>Increment</button>
            <button onClick={() => user.countDispatch('decrement')}>Decrement</button>
            <section>
                <h1>Notes Section</h1>
                <Button addNote={addNote}></Button>
                <ul>
                    {
                        notes.map((note, index) => (
                            <li key={index}>{note}</li>   
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}
export default ComponentC;
