import React from 'react'
import useRefreshToken from '../../Hooks/useRefreshToken'
import Modal from '../ReusableComponents/Modal/Modal'
import {openModal} from '../../Redux/Slices/modalSlice'
import {useDispatch} from 'react-redux' 
import { GlobalStyle } from '../ReusableComponents/Modal/globalStyle'

const Test = () => {
  const dispatch = useDispatch()
  const open = ()=>{
    dispatch(openModal())
  }
    const refresh = useRefreshToken() 
  return (
    <>
        <Modal width='30vw' height='80vh' top='15%' right= '35%'>
          <div className='modal-content'>
            <h2 style={{textAlign:'center'}}>Create a community</h2>
            <p>Select a category</p>
          </div>
        </Modal>
        <button onClick={open}>modal</button>  
        {/* <button onClick={refresh}>refresh</button> */}
        {/* <GlobalStyle/>  */}
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
        <p>Lorem ipsum ufshvfskvhdfvhfdhvdflvjvsfvfsv  fjksdfashfkjsdf fsdjfashfjksf kjsdhfsadhfkas</p>
    </>
  )
}

export default Test