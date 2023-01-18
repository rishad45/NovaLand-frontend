import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        id : '',    
        username : '',
        email : '',
        bio : '',
        profileUrl: ''
    }, 
    reducers : {
        setuser :  (state,action)=>{
            console.log('user setting in progress', action);
            state.id = action?.payload?._id;
            state.username = action.payload?.userName; 
            state.email = action.payload?.email;
            state.bio = action.payload?.bio;
            state.profileUrl = action.payload?.profile;
            return state;
        }
    }
})

// for dispatch
export const {setuser} = userSlice.actions  

// for configurestore 
export default userSlice.reducer

