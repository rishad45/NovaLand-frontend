import {createSlice,configureStore} from '@reduxjs/toolkit'

// importing reduers
import userReducer from '../Slices/userSlice'
import tokenReducer from '../Slices/tokenSlice' 
import modalReducer from '../Slices/modalSlice' 
import currentCommunityreducer from '../Slices/communitySlice'


export default configureStore({
    reducer: {
        user : userReducer,
        token : tokenReducer,
        modal : modalReducer,
        currentCommunity : currentCommunityreducer
    },
})


