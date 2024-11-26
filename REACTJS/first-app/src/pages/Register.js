import{Header} from "./Header"
import{Footer} from "./Footer"
import{useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from "./reduxExamples/loginform/loginSlicer"
import { useEffect, useState } from "react"

export default function Register(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const res=useSelector((state)=>state.loginReducer.res)
    const [data,setData]=useState({name:"",email:"",mobile:"",gender:"",password:""})
    function sendData(event){
        event.preventDefault()
    //ajax
        dispatch(register(data))
        // navigate("/login")

    }
    useEffect(()=>{
      if(res){
        navigate("/login")
      }
    },[res])
    return(<>
    <Header/>
    <h1>Register</h1>
    <div className="alert alert-primary mt-4" role="alert">         
        <form className="w-50" id="register-form" onSubmit={sendData}>
            <div className="mb-3">
              <label for="Name" className="form-label" >Name</label>
              <input type="text" onChange={(event)=>setData({...data, name: event.target.value})}  className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" onChange={(event)=>setData({...data, email: event.target.value})}className="form-control" id="email"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
             <div className="mb-3">
              <label for="contact" className="form-label">Contact No.</label>
              <input type="number"onChange={(event)=>setData({...data, mobile: event.target.value})} className="form-control" id="contact"/>
            </div>
            <div className="mb-3">
            <label for="gender" className="form-label">Gender</label>
            <select className="form-select" onChange={(event)=>setData({...data, gender: event.target.value})} id="gender" aria-label="Default select example">
              <option selected value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="password" onChange={(event)=>setData({...data, password: event.target.value})}className="form-control" id="password"/>
            </div>
            <div className="mb-3">
              <label for="confirmpassword" className="form-label">Confirm password</label>
              <input type="password" className="form-control" id="confirmpassword"/>
            </div>
           
           
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    <Footer/>

    </>)
}