import React from 'react'
interface inputProps{
    handleEvent:(event:string)=>void;
}
function Input({handleEvent}:inputProps) {
    return (
        <>
        <input onChange={(e)=>handleEvent(e.target.value)}/> 
        </>
    )
}

export default Input;
