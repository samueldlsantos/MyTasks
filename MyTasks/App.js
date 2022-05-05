import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login.js'
import TasksScreen from './screens/TasksScreen.js';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TasksScreen" component={TasksScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App