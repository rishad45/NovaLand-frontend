import React from 'react'
import './LandingNav.scss'
const LandingNav = () => {
    return (
        <>
            <div className='navBar'>
                <div className="left">
                   <span>NOVALAND</span>
                </div>
                <div className="middle">
                    <span>FEATURES</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                </div>
                {/* <div className="right">
                    <button>Login Now</button>
                </div> */}
            </div>
        </>
    )
}

export default LandingNav