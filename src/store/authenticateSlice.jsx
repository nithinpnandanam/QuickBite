import { createSlice} from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
    name:'authenticate',
    initialState:{
        isAuthenticated:false,
        userDetail:null

    },
    reducers:{
        checkAuthenticate:(state,action)=>{
            console.log("action",action)
             if(action.payload.status==="LOGIN"){
                state.isAuthenticated=true
                state.userDetail=action.payload.userDetail
             }else{
                state.isAuthenticated=false
             }
        },
     
    }
})


export const {checkAuthenticate} = authenticateSlice.actions
export default authenticateSlice.reducer