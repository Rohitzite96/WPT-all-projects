import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { logout } from "./reduxExamples/loginform/loginSlicer"
export default function Menu(){
  const dispatch=useDispatch()
   const auth=useSelector((state)=>(state.loginReducer.auth))
   const signOut=useSelector((state)=>(state.loginReducer.signOut))
   const navigate=useNavigate()
  useEffect(()=>{
    if(signOut){
      navigate("/login")
    }
  },[signOut])
    return (<>
      
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
               
      <li className="nav-item">
          <Link className="nav-link " to="/Product">Product</Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link " to="/calc">Calculator</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Redux
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/redux">Counter</a></li>
            <li><a className="dropdown-item" href="#">CheckEO</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </ul>
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {auth?"":<> <li className="nav-item"><Link className="nav-link " to="/login">Login</Link></li>
                      <li className="nav-item"><Link className="nav-link " to="/register">Register</Link></li> </>}

      <li className="nav-item">
       <button className="btn btn-outline-danger" onClick={()=>dispatch(logout())}>Logout</button>
        </li>

        </ul>

        </div>

    </div>
  </div>
</nav>

    
    </>)
}
export {Menu}