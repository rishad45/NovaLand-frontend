import {createSlice,configureStore} from '@reduxjs/toolkit'

// importing reduers
import userReducer from '../Slices/userSlice'
import currentCommunityreducer from '../Slices/communitySlice'

export default configureStore({
    reducer: {
        user : userReducer, 
        currentCommunity : currentCommunityreducer,
    },
})


