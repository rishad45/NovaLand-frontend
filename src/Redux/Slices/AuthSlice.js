import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null,
        token : null
    },
    reducers : {
        setCredentials : (state,action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = token
        },
        logOut : (state,action) => {
            state.user = null
            state.token = null
        }
    },
})

export const {setCredentials,logOut} = authSlice.actions

export default authSlice.reducer

export const selectUser = (state) => state.auth.user

export const selectToken = (state) => state.auth.token  
