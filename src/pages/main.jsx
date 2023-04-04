import { Box } from '@mui/material'
import React from 'react'
import FloatingActionButton from '../components/floatingActionButton'

const Main = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'background.main',
            }}
        >
            <FloatingActionButton />
        </Box>
    )
}

export default Main