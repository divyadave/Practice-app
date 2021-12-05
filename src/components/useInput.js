import React, { useState} from 'react'

function useInput() {
    const [value, setValue] = useState('')

    const bind = {
        value: value,
        onChange: e => {
            console.log(e.target.value)
            setValue(e.target.value)
        }
    }
    const reset = () => {
        setValue("")
    }

    console.log(value)

    return [value, bind, reset]
  
}

export default useInput
