import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Login from './screens/Login.js'
import TasksScreen from './screens/TasksScreen.js';
import CreateTaskScreen from './screens/CreateTaskScreen.js';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'




const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f1f1f1',
            height: 100
          },
          headerTitleStyle: {
            color: '#34433D',
            fontSize: 40,
            marginLeft: 15
          }

        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="TasksScreen"
          component={TasksScreen}
          options={({ navigation }) => ({
            title: 'Tareas',
            headerRight: () => (
              <TouchableOpacity
                style={styles.btnAgregar}
                onPress={() => navigation.navigate("CreateTaskScreen")}>
                <Text style={styles.textBtn}>+</Text>
              </TouchableOpacity>

            )

          })} />
          <Stack.Screen
          name="CreateTaskScreen"
          component={CreateTaskScreen}
          options={{
            title: 'Agregar tarea'

          }}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
  btnAgregar: {
    backgroundColor: '#1FC9FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  }
});