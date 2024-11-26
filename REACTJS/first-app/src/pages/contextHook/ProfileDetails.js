import { userContext } from "./Profile"
import { useContext, useState } from "react"
import { ProfileModal } from "./ProfileModal"
export const ProfileDetails=()=>
    {
        const[index,setIndex]=useState(0)
    const{ user, setUser}= useContext(userContext)

        return(
        <>
        {user.map((u,i)=>{
        return(<>
        <hr/>
            <ul key={i} className="list-group bg-secondary">
            <li className="list-group-item bg-secondary"><div className="card-header fs-2"><u><b>{u.name}</b></u></div></li>
            <div className="card-body">
            <li className="list-group-item">{u.age}</li>
            <li className="list-group-item">{u.email}</li>
            <li className="list-group-item">{u.mobile}</li>
            <li className="list-group-item">patta bol patta!! {u.city}</li>
            </div>
            <li className="list-group-item">
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">Update</button>
            </li>
         </ul>
         <hr/>
         
          </>)   
        })}
             <ProfileModal user={user} setUser={setUser} index={index}/>
        </>)
    }