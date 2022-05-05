import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem.js'
const TaskList = ({ tasks }) => {


    const renderItem = ({item}) =>{
        console.log({item});
        return <TaskItem task={item} />
    } 

    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id + ''}
                renderItem={renderItem}
            />
        </View>
    )
}

export default TaskList