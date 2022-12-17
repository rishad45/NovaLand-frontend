import './modal.scss'
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from 'react-redux' 
import { useState } from 'react';
import {closeModal} from '../../../Redux/Slices/modalSlice'
const Modal = ({ children, width, height, top, right }) => { 
    const dispatch = useDispatch() 
    const close = () => {
        dispatch(closeModal())  
    }
    const isOpen = useSelector(state => state.modal) 
    console.log(isOpen) 
    if(!isOpen) return null 
    return (
        <div className="modal-outlay">
            <div className='modal' style={{ width: width, height: height, top: top, right : right }}>
                <div className='modalHeader'>
                    <CloseIcon onClick={close} />
                </div>
                <div className="modal-body">
                    {children}  
                </div>
            </div>
        </div>
    )
}

export default Modal