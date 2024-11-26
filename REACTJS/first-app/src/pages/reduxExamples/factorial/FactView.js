import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getFact } from "./FactSlicer";


export function FactView()
{
    const dispatch=useDispatch()
    const result=useSelector((state)=>(state.factReducer.factorial))
    const [num,setNum]=useState(0)
    return (<>
    <input type="number" value={num} onChange={(event)=>setNum(event.target.value)}/>
    <button className="btn btn-primary" onClick={()=>dispatch(getFact(num))}>Get Factorial</button>
  <h1> Result : {result}</h1>
    </>)
}