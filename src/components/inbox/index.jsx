import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Loading from '../loading';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

const InboxPopup = (props) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (props.isOpen) {
            console.log('call message api');
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [props.isOpen])

    return (
        <Box
            width={670}
            height={686}
            paddingX={'32px'}
            paddingY={'24px'}
            borderRadius={1}
            sx={{
                backgroundColor: '#fff',
                transition: '0.3s ease-in-out',
                transform: props.isOpen ? 'scale(1,1)' : 'scale(0, 0)',
            }}
            position={'absolute'}
            bottom={110}
            right={34}
        >
            <FormControl className='inbox-search' sx={{ m: 1, width: '100%' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    startAdornment={
                        <InputAdornment position="start">
                            Search
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </FormControl>
            <Box
                className='inbox-list'
                height={'90%'}
            >
                {isLoading ?
                    <Loading name='Chats' />
                    :
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography>
                            Empty Message
                        </Typography>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default InboxPopup