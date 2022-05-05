import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
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
        justifyContent: 'flex-start',
        padding:10,
        paddingTop:0
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34433D'
    },
    subtitle: {
        fontSize: 20,
        color: '#34433D'
    },
    textInput: {
        marginTop: 20,
        borderRadius: 30,
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        backgroundColor: '#fff'
    },
    button: {
        width: '40%',
        borderRadius: 30,
        height: 50,
        marginTop: 20,
        padding: 10,
        fontSize: 30,
        backgroundColor: '#FC0061',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    textBoton: {
        color: '#fff',
        fontWeight: 'bold'
    }
});