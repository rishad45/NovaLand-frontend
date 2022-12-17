import {createSlice} from '@reduxjs/toolkit'

const currentCommunitySlice = createSlice({
    name : 'currentCommunity',
    initialState : '',
    reducers : {
        setcurrentCommunity : (state, action) => {
            const {current} = action.payload
            state = current
            return state
        }
    }
})

// for dispatch
export const {setcurrentCommunity} = currentCommunitySlice.actions

// for store
export default currentCommunitySlice.reducer