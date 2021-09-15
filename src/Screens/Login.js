import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

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
        <View>
            <TextInput style={styles.textinputStyle} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.textinputStyle} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
            <Button title="Login" onPress={() => _login(email, password)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        
    },
    textinputStyle : {
        height: 30
    }
});

export default Login;