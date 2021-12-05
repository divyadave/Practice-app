import React from 'react'
import {useState, useEffect} from 'react';

function HooksCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    const [items, setItems] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [count, setCount] = useState(0)

    const logMousePosition = (e) => {
     
        setX(e.clientX)
        setY(e.clientY)

    }
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        console.log('clicked')
        document.title = 'Clicked times'
     /*    window.addEventListener('mousemove', logMousePosition) */
        return () => {
            /* window.removeEventListener('mousemove', logMousePosition) */
            clearInterval(interval)

        }
        
    }, [count])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
        
    } 


    return (
        <div>
            { count }
            Hooks: {x} : {y}
            <form>
                <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value}) }>

                </input>
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})}></input>
            </form>
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <button onClick={addItem}>Add Item</button>

           <ul>
               {
                   items.map(item => (
                       <li key={item.id}>{ item.value}</li>

                   ))
               }
           </ul>

            
        </div>
    )
}

export default HooksCounterThree
