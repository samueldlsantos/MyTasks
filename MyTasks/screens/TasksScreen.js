import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import {getTasks} from '../Api'
import Layout from '../components/Layout'
import TaskList from '../components/TaskList.js'

const TasksScreen = () => {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, [])


  return (
    <Layout>
        <TaskList tasks={tasks} />
       
    </Layout>
  )
}

export default TasksScreen