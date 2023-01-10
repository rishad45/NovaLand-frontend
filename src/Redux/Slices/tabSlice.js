import {createSlice} from '@reduxjs/toolkit'

export const tabSlice = createSlice({
    name : 'tab',
    initialState : null,
    reducers : {
        setTab : (state,action) => {
            state = action.payload
            return state
        }
    }
})

export const {setTab} = tabSlice.actions

export default tabSlice.reducer 