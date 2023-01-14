import React from 'react'
import './tab.scss'
const Tab = ({ setTab, name1, name2, tab }) => {
    return (
        <div className='tab'>
            <div className="firstSide" onClick={() => setTab('all')} style={tab === 'all' ? {backgroundColor:'yellow'} : {backgroundColor:'white'}}>
                <span>{name1}</span>
            </div>
            <div className="secSide" onClick={() => setTab('blocked')} style={tab === 'blocked' ? {backgroundColor:'yellow'} : {backgroundColor:'white'}}>
                <span>{name2}</span>
            </div>
        </div>
    )
}

export default Tab