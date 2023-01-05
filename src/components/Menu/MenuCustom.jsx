import {Menu, MenuItem } from '@mui/material' 
const MenuCustom = () => {
    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opened}
                onClose={closeMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            ><div>
                    <MenuItem onClick={closeMenu}>Report</MenuItem>
                    <MenuItem onClick={closeMenu}>Leave Community</MenuItem>
                    <MenuItem onClick={closeMenu}>Share Post</MenuItem>
                </div>
            </Menu>
        </>
    )
}

export default MenuCustom