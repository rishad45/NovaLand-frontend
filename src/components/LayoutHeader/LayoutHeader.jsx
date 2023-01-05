import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import '../../style.scss'
// components
import Navbar from '../navbar/Navbar'

const LayoutHeader = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <Outlet/> 
        </div>
    )
}

export default LayoutHeader