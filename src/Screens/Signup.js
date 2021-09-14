import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const _signup = (email, password, confirmPassword) => {
        if(email != '' && password == confirmPassword){
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("user was created");

            }).catch((error) => {
                if(error === 'auth/email-already-in-use'){
                    console.log("email already used");
                }
                if(error === 'auth/invalid-email'){
                    console.log("using invalid email");
                }
            })
        };
    }
    return(
        <View>
            <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize="none" autoCorrect={false} />
            <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} autoCapitalize="none" autoCorrect={false}/>
            <TextInput placeholder="Confirm Password" onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword} autoCapitalize="none" autoCorrect={false}/>
            <Button title="Sign Up" onPress={() => _signup(email, password, confirmPassword)}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Signup;