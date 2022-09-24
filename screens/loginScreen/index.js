import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { styles } from './styles';

export const LoginScreen = () => {
    const navigation = useNavigation()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const name = 'Admin'
    const pass = '12345'

    const LoginScreen = () => {
        if (login == name && password === pass) {
            navigation.navigate('PostScreen')
            setLogin('')
            setPassword('')
        }
        else {
            Alert.alert('Login or Password incorrect.\nPlease try again.')
        }
    }

    return (
        <View style={styles.containter}>
            <Text style={styles.titleText}>Autorization</Text>

            <Text style={styles.infoText}>Login</Text>
            <TextInput
                value={login}
                onChangeText={setLogin}
                placeholder='Login'
                style={styles.input}
            />
            <Text style={styles.infoText}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
                style={styles.input}
                secureTextEntry={true}
            />
            <Pressable
                onPress={() => LoginScreen()}
                style={styles.submit}>
                <Text style={styles.submitText}>Submit</Text>
            </Pressable>
        </View>
    )
}