import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkArmstrong, checkPrime } from "./PrimeSlicer";


export function PrimeView(){

    const dispatch=useDispatch()
    const result=useSelector((state)=>(state.ppp.result))
    const [num,setnum]=useState(0)

    return(<>
    <input type="number" value={num} onChange={(event)=>setnum(event.target.value)}/><br/><hr/>
    <button className="btn btn-primary" onClick={()=> dispatch(checkPrime(num))}>Check Prime</button>
    <button className="btn btn-primary" onClick={()=> dispatch(checkArmstrong(num))}>Check Armstrong</button>

    <h5>Result: {result}</h5>
    </>)

}