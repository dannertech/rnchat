import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _login = (email,password) => {
        if(email != '' && password != ''){
            auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("successfully ");
                props.navigation.navigate('Chat');
            }).catch((error) => {
                console.log(error);
            })
        }
    };

    return(
        <View style={styles.mainView}>
            <View style={styles.formView}>
            <TextInput style={styles.textinputStyle} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.textinputStyle} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => _login(email, password)}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subButtonStyle} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={{color: 'white', fontSize: 15}}>or Sign up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textinputStyle: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
        color: 'black',
        backgroundColor: 'white'
    },
    formView: {
        flexDirection: 'column',
        marginHorizontal: 40
    },
    mainView: {
        height: '100%',
        backgroundColor: '#1D1F1F',
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: '#FFBBD6',
        height: 40,
        marginHorizontal: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 2
    },
    subButtonStyle: {
        alignItems: 'center',
        marginTop: 15,
        
    }
});

export default Login;