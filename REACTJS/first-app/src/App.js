import "./assets/css/style.css"
// import {useState,useEffect } from "react";
// import nezuko from "./assets/imgs/nezuko.jpeg"//use import when the number of images are fixed.

// function App({name, age, path}) {
//   // console.log(props)

//   /*hooks
//   1). useState()
//   2). useEffect()
//   3). useContext()
//   4). use useReducer()
//   5). useCallback()
//   6). useWrap*/

//   const[n,setN]=useState("Saiba")
//   const[ag,setAge]=useState("31")
  


  


//   function alertCall(){
//     alert("a Kundan..... ")
//   }

//   // useEffect(()=>{
//   //   console.log("use Effect.")
//   // })//1) on render 2) no depndencies array when run on every starte variable value changed.


//   // useEffect(()=>{
//   //     console.log("useEffect")
//   // },[])
//   // these effect only render 2) not run on any state variable value changed 




//   // useEffect(()=>{
//   //   console.log("use Effect")
//   // },[n])
//   //1) only on render 2) 
//   // useEffect(()=>{

//   // }[stateVariable(s)])

//   // useEffect(()=>{

//   // },[dependencies(optioonal part)])



//   // useEffect(()=>{
//   //   console.log("use Effect")
//   //   setTimeout(()=>{
//   //    setN("Daya")
//   //    setAge("23")
//   //   },3000)
//   // },[])

//    

//   return (
//     < >
//      <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// {/* 
//     {/* <h1> Hello Name: {props.name} Age:{props.age}</h1> */}
//     {/* <h1 style={{color:"red",backgroundColor:"aqua"}}> Hello Name: {name} Age:{age}</h1> */}
//     <h1 className="bg-color text-color"> Hello Name: {name} Age:{age}</h1>
//     <img src={require("./assets/imgs/"+path)} height={300}/>
//     {/* <img src={require("./assets/imgs/levi.jpg")} height={300}/> */}
//     <h2 style={{color:"red"}}>{n}</h2>
//     <h2>{ag}</h2>
//     <button onClick={()=>setN("Jethalal")}>Change Name</button>
//     <button onClick={()=>setAge("33")}>Change age</button>
// <button onClick={()=>alertCall()}> Alert Call</button> 

//     </>
//   ); 
// }

// export default App;


// JXX(JavaScript Extension) rules
// 1) close all tags important/compulsory otherwies error
// 2) must return single jsx object means return only one tag <></> fragments
// 3) className=> className ,for=> htmlFor, simply class cannot be used  className is used.
// 4)simply for keyword cannot be used it is replaced by htmlFor;
// 5) ternary operator?: and map(); function to iteraateee=l

// import CompVariable from "compFilepath"
import { Home } from "./pages/Home"
import { Footer } from "./pages/Footer"
import { Header } from "./pages/Header"
function App(){
  return(<>
  
<Header/>
<Home/>
<Footer/>

  </>)
}
export default App