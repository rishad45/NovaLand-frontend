import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import '../../style.scss'
import React from 'react'
import AdminLeftbar from './AdminLeftbar'
import AdminNavbar from './AdminNavbar'
const AdminLayout = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <AdminNavbar />
            <div style={{ display: "flex" }}>
                <AdminLeftbar />
                <div style={{ flex: 8 }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
