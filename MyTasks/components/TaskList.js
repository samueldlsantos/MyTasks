import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem.js'
import Layout from '../components/Layout'

const TaskList = ({ tasks }) => {


    const renderItem = ({item}) =>{
        console.log({item});
        return <TaskItem task={item} />
    } 

    return (
            <FlatList
            style = {styles.listContainer}
                data={tasks}
                keyExtractor={(item) => item.id + ''}
                renderItem={renderItem}
            />
    )
}

export default TaskList

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        paddingTop: 20
    }
});