import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const loginSlice=createSlice({
    name:"login",
    initialState:{
        user:"",
        auth:false,
        msg:"",
        signOut:false,
        res:false
    },
    reducers:{
        setResponse: function(state,action)
        {
            const responseData=action.payload
          if(responseData.login)
            {
            state.auth=true
            state.user=responseData.person
            state.msg="Login Successful"
            state.signOut=false
        }
        
            else{
                 state.user=""
                state.msg="Login Failed"
                state.signOut=false
            }      state.auth=false
         
            // if(credentials.email=="admin@gmail.com" && credentials.password=="123456")
            // {
            //     state.auth=true
            //     state.user=credentials.email
            //     state.msg="Login Successful"
            //     state.signOut=false
            // }
            // else{
            //     state.auth=false
            //     state.user=credentials.email
            //     state.msg="Login Failed"
            //     state.signOut=false
            // }
        },
        logout:function(state,action)
        {
            state.auth=false
            state.user=""
            state.msg="Logout Successfully"
            state.signOut=true
        },
        getReg:function(state,action){
            const regData=action.payload
            //axios
            console.log(regData)
            state.msg="Register Successful"
            state.res=true
        }
    }
})
export const {logout,getReg,setResponse}=loginSlice.actions
export default loginSlice.reducer

export const authenticate=(credentials)=>async (dispatch)=>{ //dispatch is by default parameter used to call reducers function.
    try{  //if an rejection occurs for axios to handle that rejection try catch is used 
    const response=  await axios.post("http://localhost:8000/login",credentials)
    console.log(response.data)
    dispatch(setResponse(response.data))
    }
    catch(err){
        console.error(err)
    }

}
export const register=(user)=>async (dispatch)=>{ //dispatch is by default parameter used to call reducers function.
    try{  //if an rejection occurs for axios to handle that rejection try catch is used 
    const response=  await axios.post("http://localhost:8000/registration",user)
    console.log(getReg(response.data))
    dispatch(getReg(response.data))
    }
    catch(err){
        console.error(err)
    }

}
