import { useState } from "react"

export function EvenOdd()
{
    const [num,setNum]=useState(1)
    const[Result,setResult]=useState(false)

    function checkNum(){
    if(n==0 || num<0){
        alert(num+" is universal number, or less than zero")
    }
    else{
        if(num%2==0){
            setResult(true)
        }
        else{
            setResult(false)
        }
    }
        
    }
return(<>

<input value={num} onChange={(event)=>setNum(event.target.value)}/>
<button onClick={checkNum}>Check Number(Even/Odd)</button>

</>)
}