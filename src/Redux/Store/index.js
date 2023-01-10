import {combineReducers, configureStore} from '@reduxjs/toolkit'
// importing reduers
import userReducer from '../Slices/userSlice'
import currentCommunityreducer from '../Slices/communitySlice'
import globalRefreshReducer from '../Slices/globalRefreshSlice'
import tabReducer from '../Slices/tabSlice'

import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist' 
import thunk from 'redux-thunk'

// configuring persist
const persistConfig = {
    key : 'root', 
    storage
}

const rootReducer = combineReducers({ 
    user : userReducer,
    currentCommunity : currentCommunityreducer,
    globalRefresh : globalRefreshReducer,
    tab : tabReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)   


const store = configureStore({
    reducer: persistedReducer, 
    middleware : [thunk] 
})

export default store  


