import React from 'react'
import { Box, Typography, TextField, Checkbox } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreateIcon from '@mui/icons-material/Create';

const TaskDetails = ({ taskDetails }) => {

    const showOrHideDetails = (e) => {
        const parent = e.target.parentElement
        const taskDetailBody = parent.parentElement.parentElement.children[1]

        if (e.target.style.transform || e.target.style.transform === 'rotate(180deg)') {
            e.target.style.transform = ''
            taskDetailBody.style.display = 'block'
        } else {
            e.target.style.transform = 'rotate(180deg)'
            taskDetailBody.style.display = 'none'
        }
    }

    const checkTheTask = (e) => {
        const parent = e.target.parentElement
        const title = parent.parentElement.children[1].children[0].children[0]
        const dateWarning = parent.parentElement.children[1].children[0].children[1].children[0]

        if (e.target.checked) {
            title.style.textDecoration = 'line-through'
            dateWarning.style.display = 'none'
            title.style.color = 'gray'
        } else {
            title.style.textDecoration = 'none'
            title.style.color = 'black'
            dateWarning.style.display = 'block'
        }
    }

    return (
        <Box
            className='task'
            marginBottom={'22px'}
            paddingBottom={3}
            borderBottom={'1px solid gray'}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2
            }}
        >
            <Checkbox
                defaultChecked={taskDetails.completed}
                color="default"
                sx={{
                    padding: '2px',
                }}
                onClick={(e) => checkTheTask(e)}
            />
            <Box
                className='task-details'
                width={'100%'}
            >
                <Box
                    className='task-details-header'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Typography
                        className='task-title'
                        variant='subtitle1'
                        sx={{
                            textDecoration: taskDetails.completed ? 'line-through' : 'none',
                            textAlign: 'left',
                            maxWidth: '340px'
                        }}
                    >
                        {taskDetails.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            className='task-reminder'
                            variant='subtitle2'
                            color='indicator.main3'
                            marginLeft={5}
                        >
                            2 days left
                        </Typography>
                        <Typography
                            className='task-date'
                            variant='subtitle2'
                            marginX={2}
                        >
                            12/06/2021
                        </Typography>
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                position: 'relative',
                            }}
                            onClick={(e) => showOrHideDetails(e)}
                        >
                            <KeyboardArrowUpIcon
                                sx={{
                                    position: 'relative',
                                    zIndex: -1
                                }}
                            />
                        </Typography>
                        <Typography
                            marginLeft={2}
                            sx={{
                                cursor: 'pointer'
                            }}
                        >
                            <MoreHorizIcon />
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className='task-detail-body'
                >
                    <Box
                        className='task-date-select'
                        marginTop={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <AccessTimeIcon
                            color='primary'
                        />
                        <Box
                            className='task-date-selector'
                            width={'120px'}
                            marginLeft={2}
                        >
                            <TextField
                                type='date'
                                value={'2021-06-12'}
                            />
                        </Box>
                    </Box>
                    <Box
                        className='task-description'
                        marginTop={2}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <CreateIcon
                            color='primary'
                        />
                        <Typography
                            variant='body'
                            marginLeft={2}
                            sx={{
                                textAlign: 'left'
                            }}
                        >
                            Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskDetails