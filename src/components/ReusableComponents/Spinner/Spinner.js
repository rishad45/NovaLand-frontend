import { CircularProgress, Box } from '@mui/material'
import './spinner.scss'
const Spinner = () => {
    return (
        <div className='spinner'>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default Spinner