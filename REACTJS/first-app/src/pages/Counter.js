import{useState,useCallback, useMemo} from "react"
import { ResultCallback } from "./ResultCallback";
// export function Counter(){
//     let [count,setCount]=useState(0)
//     return(<>
//     <button onClick={()=>{setCount((prevCount)=>(prevCount+1))}}>+</button>
//     <button onClick={()=>{setCount((prevCount)=>(prevCount-1))}}>-</button>
//     <div> count: {count}</div>
//     </>)

//         /*
//         -----HOOKS----
//         usecallBack
//             function return 
//             function memorized
//         use memo()
//             value return 
//             value memorized 
//         */
// }   

export function CounterCallback()
{ 
    let [count,setCount]=useState(0)
    

    const logCount=useCallback(()=>{
        console.log("Count= " +count)
    },[])


    const incCount=()=>{
        setCount((prevCount)=>prevCount+1)}
   
    return(<>
    <button onClick={incCount}>+</button>
    {/* <button onClick={()=>{setCount((prevCount)=>(prevCount-1))}}>-</button> */}
 
        <div>Count : {count}</div>
        <ResultCallback logCount={logCount}/>
    </>)

}

export function CounterMemo()
{
    
   let [count,setCount]=useState(0)
    const logCountval=useMemo(()=>{
        return count
    },[count])
    const incCount=()=>{
        setCount((prevCount)=> prevCount+1)
    }
    return(<>
        <button onClick={incCount}>+</button>
        {/* <button onClick={()=>{setCount((prevCount)=>(prevCount-1))}}>-</button> */}
        {/* <button onClick={logCount}>Log Count</button> */}
            <div>Count : {count}</div>
           Log Count: {logCountval}
        </>)
}

export function Counter(){
    const [Count, setCount]=useState(0)
    
    const logCount=useCallback(()=>{
        
        console.log("Count :"+Count);
        
    },[Count])
    
        const incCount=()=>{
        setCount((prevCount)=>(prevCount+1))
    }
    
        return(<>
        
        <button onClick={incCount}>+</button>
        <button onClick={logCount}>LogCount</button>
        Count : {Count}
        
            </>)
    }