import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import moment from 'moment'

const TaskItem = ({ task }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{task.name}</Text>
      <View style={styles.flex}>
        <Icon
          type='material-community'
          name={'clock-outline'}
          size={20}
          color={'#1FC9FD'} />
        <Text style={styles.text}>{moment(task.createdAt).format("LLLL")}</Text>

      </View>
      {/* <Text style={styles.text}>{moment(task.createdAt).format('DD-MM-YYYY')}</Text>
        <Text style={styles.text}>{moment(task.createdAt).calendar()}</Text>
        <Text style={styles.text}>{moment(task.createdAt).format("MMM Do YY")}</Text> */}

      <View style={styles.flex}>
        <Icon
          type='material-community'
          name={'book-outline'}
          size={20}
          color={'#FC0061'} />
        <Text style={styles.text}>{task.asignature}</Text>
      </View>


    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 100,
    padding: 20,
    marginVertical: 8,
    borderRadius: 15
  },
  flex: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34433D',
    marginBottom: 10
  },
  text: {
    color: '#34433D',
    marginBottom: 5,
    marginLeft: 10
  }
});