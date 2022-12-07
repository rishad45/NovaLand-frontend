import React from 'react'

const Box = ({width,height,color,borderRadius,children}) => {
  return (
    <div className='boxContainer' style={{width:width,height:height,backgroundColor:color,borderRadius:borderRadius, border:'2px solid black'}}>
        {children} 
    </div>
  )
}

export default Box