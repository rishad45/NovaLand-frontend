import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import '../../style.scss'
// components
import Navbar from '../navbar/Navbar'
import LeftBar from '../leftBar/LeftBar'
import RightBar from '../rightBar/RightBar'
import MobileNavbar from '../MobileBottomNavbar/MobileNavbar'

const Layout = () => {
    const { darkMode } = useContext(DarkModeContext) 
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}> 
            <Navbar />
            <div className="mobile-bottom-navBar">
                <MobileNavbar />
            </div>
            <div style={{ display: "flex" }}>
                <LeftBar />
                <div style={{ flex: 6 }}>
                    <Outlet />
                </div>
                <RightBar />
            </div>
        </div>
    )
}

export default Layout