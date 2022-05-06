import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native';


const CreateTaskScreen = () => {
    const navigation = useNavigation();
    return (
        <Layout>
            <TextInput
                style={styles.textInput}
                placeholder='Nombre de la tarea' />
            <TextInput
                multiline
                style={styles.textDescription}
                placeholder='Descripción' />
            <TextInput
                style={styles.textInput}
                placeholder='Fecha destinada a realizarse' />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("TasksScreen")}
            >
                <Text style={styles.textBoton}>Agregar</Text>
            </TouchableOpacity>
        </Layout>
    )
}

export default CreateTaskScreen

const styles = StyleSheet.create({
    textInput: {
        marginTop: 20,
        borderRadius: 15,
        padding: 10,
        paddingStart: 20,
        width: '100%',
        height: 50,
        backgroundColor: '#fff'
    },
    textDescription: {
        marginTop: 20,
        borderRadius: 15,
        padding: 10,
        paddingStart: 20,
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        textAlignVertical: 'top'
    },
    button: {
        width: '40%',
        borderRadius: 15,
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