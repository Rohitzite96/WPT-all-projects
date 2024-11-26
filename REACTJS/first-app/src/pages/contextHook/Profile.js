import { createContext,  useState } from "react"
import { Container } from "./Container"


export const userContext=createContext()
export const Profile=()=>
{
    const [user,setUser]=useState([
      { id:1,
         name:"Anshuman",
        age:30,
        mobile:"9933238489",
        email:"AwardAnshuman@gmail.com",
        city:"GirgardhanGhat"},
        {
          id:2,
            name:"Sachin Tichkule",
            age:28,
            mobile:"8833883109",
            email:"SSConstruction@gmail.com",
            city:"mumbai"
        }
    ]
    )
    //Profile=> Container=> ProfileCard=> ProfileDetails
    return(
    <>
    <userContext.Provider value={{user,setUser}}>
    <Container/>
    </userContext.Provider>
    </>)
}