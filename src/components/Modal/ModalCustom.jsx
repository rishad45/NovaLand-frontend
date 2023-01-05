import { Box, Button, Typography, Modal, Menu, MenuItem } from '@mui/material'

const ModalCustom = (
    { style = { top: '50%', left: '50%', width: 700, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, borderRadius: '0px' },
        show = false, setShow, title = 'modal title', subTitle = '', children }
) => {
    console.log("modal opened ?", show)
    console.log("style is ", style)
    const modalStyle = {
        position: 'absolute',
        top: style.top,
        left: style.left,
        transform: 'translate(-50%, -50%)',
        width: style.width,
        bgcolor: style.bgcolor,
        border: style.border,
        boxShadow: style.boxShadow,
        p: style.p,
        borderRadius: style.borderRadius
    };

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography sx={{ textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    {
                        subTitle !== '' && (
                            <Typography id='modal-modal-subTitle' sx={{ mt: 2, fontSize: '16px', textAlign: 'center' }} variant='p' component='p' >
                                {subTitle} 
                            </Typography>
                        )
                    }
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            {children}
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCustom