import {createSlice} from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name : 'modal',
    initialState : false,
    reducers : {
        openModal : (state,action) => state = true,
        closeModal : (state,action) => state = false 
    }
})

export const {openModal, closeModal} = modalSlice.actions 

export default modalSlice.reducer 

// export const isModalOpen = (state) => state.modal 

