import { Box } from '@mui/material'
import React, { Fragment, useState } from 'react'
import InboxPopup from '../inbox'
import TaskPopup from '../task'

const FloatingActionButton = () => {

    const [isActionBtnsShown, setisActionBtnsShown] = useState(false)
    const [isInboxActive, setIsInboxActive] = useState(false)
    const [isTaskActive, setIsTaskActive] = useState(false)

    const showActionBtns = () => {
        setisActionBtnsShown(!isActionBtnsShown)
    }

    const activateInbox = () => {
        setIsInboxActive(!isInboxActive)
        setIsTaskActive(false)
    }

    const activateTask = () => {
        setIsTaskActive(!isTaskActive)
        setIsInboxActive(false)
    }

    return (
        <Fragment>
            <InboxPopup isOpen={isInboxActive} />
            <TaskPopup isOpen={isTaskActive} />
            <Box
                className='inbox'
                width={60}
                height={60}
                position={'absolute'}
                bottom={31}
                right={isActionBtnsShown ? isInboxActive ? 34 : 128 : 34}
                sx={{
                    backgroundColor: '#FFF',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: '0.3s ease-in-out',
                    opacity: isActionBtnsShown ? 1 : '0',
                    zIndex: 1,
                    '&::before': {
                        content: '"Inbox"',
                        color: '#fff',
                        position: 'absolute',
                        top: -30,
                        opacity: isTaskActive | isInboxActive ? 0 : 1,
                    },
                    '&::after': {
                        content: '""',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main3',
                        transition: '0.3s ease-in-out',
                        position: 'absolute',
                        left: isInboxActive ? -15 : 0,
                        zIndex: -2,
                    },
                }}
                onClick={activateInbox}
            >
                <Box
                    width={60}
                    height={60}
                    sx={{
                        backgroundColor: isInboxActive ? 'indicator.main2' : '#FFF',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: '0.3s ease-in-out',
                    }}
                >
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z" fill={isInboxActive ? "#FFF" : "#8885FF"} />
                    </svg>
                </Box>
            </Box>
            <Box
                className='task'
                width={60}
                height={60}
                position={'absolute'}
                bottom={31}
                right={isActionBtnsShown ? isInboxActive ? 128 : isTaskActive ? 34 : 214 : 34}
                sx={{
                    backgroundColor: '#FFF',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: '0.3s ease-in-out',
                    opacity: isActionBtnsShown ? 1 : '0',
                    zIndex: 1,
                    '&::before': {
                        content: '"Task"',
                        color: '#fff',
                        position: 'absolute',
                        top: -30,
                        opacity: isTaskActive | isInboxActive ? 0 : 1,
                    },
                    '&::after': {
                        content: '""',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main3',
                        transition: '0.3s ease-in-out',
                        position: 'absolute',
                        left: isTaskActive ? -15 : 0,
                        zIndex: -1,
                    },
                }}
                onClick={activateTask}
            >
                <Box
                    width={60}
                    height={60}
                    sx={{
                        backgroundColor: isTaskActive ? 'indicator.main' : '#FFF',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: '0.3s ease-in-out',
                    }}
                >
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.11114 0.666687H23.1111C24.3334 0.666687 25.3334 1.66669 25.3334 2.88891V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88891C0.888916 1.66669 1.88892 0.666687 3.11114 0.666687ZM3.11114 2.88891V17.3334H12V2.88891H3.11114ZM23.1111 17.3334H14.2222V2.88891H23.1111V17.3334ZM22 6.7778H15.3334V8.44446H22V6.7778ZM15.3334 9.55558H22V11.2222H15.3334V9.55558ZM22 12.3334H15.3334V14H22V12.3334Z" fill={isTaskActive ? '#FFF' : "#F8B76B"} />
                    </svg>
                </Box>
            </Box>
            <Box
                className='fab'
                width={68}
                height={68}
                position={'absolute'}
                right={34}
                bottom={27}
                sx={{
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: isInboxActive | isTaskActive ? 'none' : 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2
                }}
                onClick={showActionBtns}
            >
                <img src='../assets/icons/bolt.png' alt='bolt' />
            </Box>
        </Fragment>
    )
}

export default FloatingActionButton