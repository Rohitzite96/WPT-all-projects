import { useReducer, useState } from "react"
 export const CounterReducer = ()=>
    {
const reducer=(state,action)=>{  //action actionType / action Payload (values to reducer from view)
    let num = action.payload
    switch(action.type){    // dispatch ({type:"dec"}) or dispatch ({type:"inc"})
        
        case "inc":
            state ={...state, count: state.count + 1}
            return state;

        case "dec":
            state ={...state, count: state.count - 1}
            return state;
        

        case "EO":
                if(num%2==0){
                    state={state,result:`${num} is Even`}
                    return state
                }
                else{
                    state={...state, result:`${num} is Odd`}
                    return state
                }

        default:
            return state;
    }
}

//state variables
const initialState={
    count:0,
    result:""
}

const [state, dispatch]=useReducer(reducer, initialState)
const [incBy, setIncBy]=useState(1)

    return (<>
    {state.count}
    <button className="btn btn-primary" onClick={()=>dispatch({type:"inc" ,payload:incBy})} > + </button>
    <button className="btn btn-primary" onClick={()=>dispatch({type:"dec", payload:incBy})} > - </button>
    <div> Count : {state.count}</div>
    <input value={incBy}  onChange={(event)=> setIncBy(event.target.value)}/>
    <button className="btn btn-primary"  onClick={()=>dispatch({type:"EO",payload:incBy})} > Even/Odd </button>
    <div> Result : {state.result} </div>
    </>)
}
