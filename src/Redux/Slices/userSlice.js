import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        id : '',    
        username : '',
        email : '' 
    }, 
    reducers : {
        setuser :  (state,action)=>{
            state.id = action?.payload?.id;
            state.username = action.payload?.userName;
            state.email = action.payload?.email
            return state 
        }
    }
})

// for dispatch
export const {setuser} = userSlice.actions 

// for configurestore 
export default userSlice.reducer

