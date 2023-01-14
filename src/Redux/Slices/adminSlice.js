import {createSlice} from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        id: '',
        name: '',
        email: '',
        profilePicture: '',
        superAdmin: false,
    },
    reducers: {
        setAdmin :  (state,action)=>{
            state.id = action?.payload?._id;
            state.name = action.payload?.name; 
            state.email = action.payload?.email;
            state.profilePicture = action.payload?.profilePicture;
            state.superAdmin = action.payload?.superAdmin;
            return state;
        }
    }
}) 

export const { setAdmin } = adminSlice.actions

export default adminSlice.reducer;