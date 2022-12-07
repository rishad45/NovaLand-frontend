import React, { useReducer, useEffect } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './input.scss'
import { useState } from 'react';

// input reducer => reducer method to handle the state logic of input component
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val };
        default: return state;
    }
}

const InputField = (props) => {
    // password visibility toggle
    const [visible, setVisibility] = useState(false)
    const toggle = () => {
        setVisibility(!visible)
    }
    // use reducer 
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' })

    const { id, onInput } = props
    const { value } = inputState

    useEffect(() => {
        onInput(id, value)
    }, [id, onInput, value]) 

    // dispatch trigerring function
    const changeHandler = event => { dispatch({ type: 'CHANGE', val: event.target.value }) }

    const inputElement = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {
                visible === false ? (<input type='password' id={props.id} name={props.name} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} style={{ marginRight: '5px' }} />) :
                    (<input type='text' id={props.id} name={props.name} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} style={{ marginRight: '5px' }} />)
            }
            <span className='visibility-toggle' style={{ position: 'relative', zIndex: '2', marginLeft: '-32px', cursor: 'pointer' }} onClick={toggle}>
                {
                    visible === false ? <VisibilityIcon /> : <VisibilityOffIcon />
                }
            </span>
        </div>)

    const element = props.element === "input" ? (
        props.type === 'password' ? inputElement :
            (<input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} ></input>)
    ) : (
        <textarea name={props.name} rows={props.row || 3} onChange={changeHandler} value={inputState.value}></textarea>
    )
    return (
        <div className='inputBox'>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}

export default InputField