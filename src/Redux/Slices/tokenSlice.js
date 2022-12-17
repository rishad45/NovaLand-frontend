import {createSlice} from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name : 'token',
    initialState : '',
    reducers : {
        setToken : (state, action) => {
            let token = action.payload
            state = token
            return state
        }
    }
})

// for dispatch
export const {setToken} = tokenSlice.actions 

// this is for configureStore
export default tokenSlice.reducer

