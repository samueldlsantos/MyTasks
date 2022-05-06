import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
        <StatusBar />
      {children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        //justifyContent: 'flex-start',
        padding:30,
        paddingTop:0
    }
});