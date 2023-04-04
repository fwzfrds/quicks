import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchTask } from '../../services/api/task'
import Loading from '../loading'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TaskDetails from '../taskDetail';
import styles from './task.module.css'

const TaskPopup = (props) => {
    const [tasks, setTasks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [taskCategory, setTaskCategory] = useState('');

    const handleSetTaskCategory = (e) => {
        setTaskCategory(e.target.value);
    };

    useEffect(() => {
        if (props.isOpen) {
            const fetch = async () => {
                try {
                    const { data } = await fetchTask()
                    setTasks(data)
                    setIsLoading(false)
                } catch (error) {
                    console.error(error)
                }
            }

            fetch()

        }
    }, [props.isOpen])

    return (
        <Box
            width={690}
            height={710}
            paddingLeft={'32px'}
            paddingRight={'13px'}
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
            {isLoading ?
                <Loading name='Task list' />
                :
                <>
                    <Box
                        className='task-header'
                        width={'100%'}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            className='task-category-selector'
                            width={'120px'}
                            marginLeft={'100px'}
                        >
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">My Task</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={taskCategory}
                                    label="My Task"
                                    onChange={handleSetTaskCategory}

                                >
                                    <MenuItem value={'personal'}>Personal Errands</MenuItem>
                                    <MenuItem value={'urgent'}>Urgent To-Do</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Button
                            className='new-task-btn'
                            variant="contained"
                            size="medium"
                            sx={{
                                marginRight: '34px'
                            }}
                        >
                            New Task
                        </Button>
                    </Box>
                    <Box
                        className={styles.inboxList}
                        height={'90%'}
                        marginTop={'22px'}
                        paddingRight={'22px'}
                        sx={{
                            overflowY: 'scroll',
                        }}
                    >
                        {tasks.map((task, idx) => {
                            return (
                                <TaskDetails key={idx} taskDetails={task} />
                            )
                        })}
                    </Box>
                </>
            }
        </Box >
    )
}

export default TaskPopup