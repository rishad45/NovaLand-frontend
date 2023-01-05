import { useState } from 'react'

function useMenu() {
    const [anchorEl, setAnchorEl] = useState(null)

    const opened = Boolean(anchorEl)

    const closeMenu = (e) => {
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    
}

export default useMenu