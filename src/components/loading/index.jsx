import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'

const Loading = ({ name }) => {
    return (
        <Box
            width={'100%'}
            height={'100%'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress color="inherit" />
            <Typography variant='h6' marginTop={2} color={'primary.main2'}>
                {`Loading ${name} ...`}
            </Typography>
        </Box>
    )
}

export default Loading