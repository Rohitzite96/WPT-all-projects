import { createSlice } from "@reduxjs/toolkit";

 const primeSlicer=createSlice({
    name:"Prime",
    initialState:{
        result:""
    },reducers:
    // {
    //     checkPrime:function(state,action){
    //          const num=action.payload
    //         for(let i=2;i<num;i++){
    //         if(num%i==0){
    //             state.result=num+" is not prime Number."
    //             return
    //     }
    //     } 
    //      state.result=num+" is  prime Number."
    // }
    // }

   { checkArmstrong:function(state,action){
        const num=action.payload
        let temp=num
        let sum=0
        while(temp!=0){
            let x=temp%10
            sum=sum+x*x*x
            temp=temp/10            
        }
     
        if(sum==num){
            state.result=num+" is Armstrong number."
            return
        }
        state.result=num+" is not Armstrong number."
       
    }
}
})
export const {checkPrime}=primeSlicer.actions
export const {checkArmstrong}=primeSlicer.actions
export default primeSlicer.reducer