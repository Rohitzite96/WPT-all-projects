import { useEffect, useRef } from "react"

export const  UseRefExample=()=>{
const emailRef=useRef()
function changeColor(){
 
    emailRef.current.style.backgroundColor="red"
}
useEffect(()=>{
    emailRef.current.focus()//to get by default cursor on the input area
},[])
    return(<>
    <input type="emailref" ref={emailRef} placeholder="Enter email here" />
    <button onClick={changeColor} > changeColor</button>
    </>)
}