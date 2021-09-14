import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signup = (email, password, confirmPassword) => {
        if(email != '' && password == confirmPassword){
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("user was created")
            }).catch((error) => {
                if(error === 'auth/email-already-in-use'){
                    console.log("email already used")
                }
                if(error === 'auth/invalid-email'){
                    console.log("using invalid email");
                }
            })
        };
    }
    return(
        <View>
            <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email}/>
            <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} value={password}/>
            <TextInput placeholder="Confirm Password" onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword}/>
            <Button title="Sign Up"/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Signup;