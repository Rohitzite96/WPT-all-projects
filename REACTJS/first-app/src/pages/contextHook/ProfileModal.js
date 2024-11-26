import { useState } from "react"

export const ProfileModal=({setUser,user,index})=>
{
    const [selectedUser,setSelectedUser]=useState(user[index])
     const  UpdateUser=(()=>{
            user[index]={...selectedUser,name:selectedUser.name}
            setUser([...user])
     })
    return(<>
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content"> 
      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
        <input value={selectedUser.name}onChange={(event)=>setSelectedUser({...selectedUser,name:event.target.value})}/>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>UpdateUser()}>Update</button>
      </div>

    </div>
  </div>
</div> 
    </>)
}