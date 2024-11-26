import { useState } from "react"
import { increamentCount,decrementCount } from "./CounterSlicer"
import { useDispatch,useSelector } from "react-redux"


export function CounterView(){
    const dispatch=useDispatch()
    const count= useSelector((state)=>state.counter.count)
    // state.counter.count in these counter is a name of reducer of CounterStore.
    const [incBy,setIncBy]=useState(1)

    return (<>
    <input type="number"className="mt-4 " value={incBy} onChange={(event)=>(setIncBy(event.target.value))}/><br/><hr/>
        <button className="btn btn-success px-3 fs-4" onClick={()=>dispatch(increamentCount(incBy))} >+</button>
        <div style={{backgroundColor:"aqua"}}className="display-5">{count}</div>
        <button className="btn btn-danger px-3 fs-4"  onClick={()=>dispatch(decrementCount(incBy))}>-</button>
    </>)
}