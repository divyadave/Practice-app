import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCon = new AbortController();
        setTimeout(() => {
            
       
        fetch(url, {signal: abortCon.signal}).then(res => {
            if(!res.ok) {
                throw Error('could not fetch the data')
            }
            
            return res.json()
        })
        .then(data => {
            setIsPending(false)        
            setData(data)
            setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('Fetch aborted')
            }
            else {
                setIsPending(false);
                setError(err.message)

            }
          
        })
      
      
    }, 1000)
    return () => {
        abortCon.abort();
    }
}, [url]);
return {data, isPending, error}
}
