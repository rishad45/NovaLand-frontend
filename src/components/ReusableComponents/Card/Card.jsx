import React from 'react'
import './Card.scss'
const Card = ({children,width,height}) => { 
    return (
        <>
            <div className='card' style={{width:width, height:height}}>
                {children}  
            </div>
        </>
    )
}

export default Card