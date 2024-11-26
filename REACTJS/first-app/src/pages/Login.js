import{Header} from "./Header"
import{Footer} from "./Footer"
import{useNavigate} from "react-router-dom"
import{useEffect, useState,useRef} from "react"
import { authenticate,logout } from "./reduxExamples/loginform/loginSlicer"
import { useDispatch, useSelector } from "react-redux"



export default function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const resultRef=useRef()
    const auth=useSelector((state)=>state.loginReducer.auth)
    const msg=useSelector((state)=>state.loginReducer.msg)
    function sendData(event){
        event.preventDefault()
        dispatch(authenticate(data))
        // navigate("/Product")
    }
    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    const [data,setData]=useState({email:"",password:""})

    useEffect(()=>
      {
        
      if(auth){
        navigate("/Product")
      }
      else{
        resultRef.current.innerText= msg
      }
    },[auth,msg])


    return(<>
    <Header/>    


    <div className="alert alert-primary" role="alert">
      <h3 style={{color:"red"}} ref={resultRef}></h3>
        <h1>Login</h1>
        <form className="w-25" id="login-form" onSubmit={sendData}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label >
            <input value={data.email}  type="email" className="form-control" id="email" onChange={(event)=>setData({...data,email:event.target.value})}  aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label >
            <input type="password" className="form-control" id="password" onChange={(event)=>setData({...data,password:event.target.value})} />
          </div>
          
          <button type="submit" className="btn btn-primary  me-2">Submit</button>
          <button type="register" className="btn btn-primary">Register</button>
        </form>
        Email-Id:{data.email}<br/>
        password:{data.password}
      </div>
    <Footer/>

    </>)
}