import React from 'react'
import { useNavigate } from 'react-router-dom'
import './leftBarAdmin.scss'
const AdminLeftbar = () => {
    const navigate = useNavigate()
    const menu = [
        {
            name: 'Home',
            icon: '',
            location: '/admin',
            id: 1,
        },
        {
            id: 2,
            name: 'Users',
            icon: '',
            location: '/admin/users'
        },
        {
            id: 3,
            name: 'Posts',
            icon: '',
            location: '/admin/posts'
        },
        {
            id: 4,
            name: 'Communities',
            icon: '',
            location: '/admin/communities'
        },
        {
            id: 5,
            name: 'Admins',
            icon: '',
            location: '/admin/admins'
        },
    ]
    return (
        <div className='leftBarAdmin'>
            <div className="menusAdmin">
                {
                    menu.map((item) => {
                        return <div className="menuItemAdmin" key={item.id} onClick={() => {navigate(item.location)}}>
                            <span>{item.name}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AdminLeftbar