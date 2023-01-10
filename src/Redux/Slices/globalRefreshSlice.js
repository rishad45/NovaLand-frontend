import {createSlice} from '@reduxjs/toolkit'

export const globalRefreshSlice = createSlice({
    name : 'globalRefresh',
    initialState : false,
    reducers : {
        setRefresh : (state) => {
            state = !state
            return state
        }
    }
})

export const {setRefresh} = globalRefreshSlice.actions

export default globalRefreshSlice.reducer 