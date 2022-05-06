import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { backgroundColor, borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import {getUsers} from '../Api'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const Login = () => {
    const navigation = useNavigation();
    const[users, setUsers ] = useState([])

    const loadUsers = async () => {
        const data = await getUsers()
    }
    useEffect(() => {
        loadUsers()
    }, [])

    function SvgTop() {
        return (
            <Svg
                width={500}
                height={324}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
                    fill="url(#prefix__paint0_linear_103:6)"
                    fillOpacity={0.5}
                />
                <Path
                    d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
                    fill="url(#prefix__paint1_linear_103:6)"
                />
                <Defs>
                    <LinearGradient
                        id="prefix__paint0_linear_103:6"
                        x1={492.715}
                        y1={231.205}
                        x2={480.057}
                        y2={364.215}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#1FC9FD" />
                        <Stop offset={1} stopColor="#FC0061" />
                    </LinearGradient>
                    <LinearGradient
                        id="prefix__paint1_linear_103:6"
                        x1={7.304}
                        y1={4.155}
                        x2={144.016}
                        y2={422.041}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#1FC9FD" />
                        <Stop offset={1} stopColor="#FC0061" />
                    </LinearGradient>
                </Defs>
            </Svg>
        )
    }


    return (
        <Layout>
            <SvgTop />
            <Text style={styles.title}>my tasks</Text>
            <Text style={styles.subtitle}>Bienvenido, inicia sesión</Text>
            <TextInput
                style={styles.textInput}
                placeholder='usuario' />
            <TextInput
                style={styles.textInput}
                placeholder='contraseña' />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("TasksScreen")}
            >
                <Text style={styles.textBoton}>Iniciar sesión</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </Layout>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        width: '100%',
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
