import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Password = (props) => {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <input type="password" style={{marginRight:'5px'}} /><span className='visibility-toggle' style={{position:'relative', zIndex:'2',marginLeft:'-32px', cursor:'pointer' }}><VisibilityIcon /></span>
        </div>
    )
}

export default Password