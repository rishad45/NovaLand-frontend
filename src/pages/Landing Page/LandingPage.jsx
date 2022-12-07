import React from 'react'
import './LandingPage.scss'
import LandingNav from '../../components/LandingPage/navBar/LandingNav'
import Content from '../../components/LandingPage/Content/Content'
const LandingPage = () => {
    return (
        <div className='landingPage'>
            <LandingNav />
            <Content/>
        </div >
    )
}

export default LandingPage 