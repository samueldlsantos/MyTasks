import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{task.materias.asignature}</Text>
      <Text>{task.materias.description}</Text>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        paddingTop:0,
        marginVertical:8,
        borderRadius:15
    }
});