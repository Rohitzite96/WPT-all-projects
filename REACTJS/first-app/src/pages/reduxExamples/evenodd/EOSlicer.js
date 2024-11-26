import { createSlice } from "@reduxjs/toolkit";

const eoSlicer=createSlice({
    name:"eo",
    initialState:{
        result:""
    },reducers:{
        checkEO :function(state,action){
            const num=action.payload
            if(num==0 || num<0){
                state.result=num+"  zero is not applicable or negative"
            }
            else if(num==1){
                state.result=num+" is universal"
            }
            else{
                if(num%2==0){
                    state.result=num+ " is Even."
                }
                else{
                    state.result=num+ " is Odd."
                }
            }
        }

    }
})

export const{checkEO}=eoSlicer.actions
export default eoSlicer.reducer