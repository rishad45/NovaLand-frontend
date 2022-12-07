import React,{useReducer,useEffect} from 'react' 
import './input.scss'

// input reducer => reducer method to handle the state logic of input component
const inputReducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE' : 
            return {...state,value:action.val};
        default : return state; 
    }
}

const InputField = (props) => {
    // use reducer 
    const [inputState,dispatch] = useReducer(inputReducer,{value : ''})  

    const {id,onInput} = props
    const {value} = inputState 

    useEffect(()=>{
        onInput(id,value)
    },[id,onInput,value]) 

    // dispatch trigerring function
    const changeHandler = event => {dispatch({type:'CHANGE', val : event.target.value})} 


    const element = props.element === "input" ? (
        <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} ></input>
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