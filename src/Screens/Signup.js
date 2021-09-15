import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [messages, setMessages] = useState();

    const _signup = (email, password, confirmPassword) => {
        if(email != '' && password == confirmPassword){
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("user was created");

                props.navigation.navigate('Chat', {messagesData: messages});

            }).catch((error) => {
                if(error === 'auth/email-already-in-use'){
                    console.log("email already used");
                }
                if(error === 'auth/invalid-email'){
                    console.log("using invalid email");
                }
            })
        };
    };

    useEffect(() => {
        
        database().ref('/messages')
        .once('value').then((snapshot) => {
            setMessages(snapshot.val());
        })
    }, []);
    return(
        <View style={styles.mainView}>
            <View style={styles.formView}>
            <TextInput style={styles.textinputStyle} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize="none" autoCorrect={false} />
            <TextInput style={styles.textinputStyle} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} autoCapitalize="none" autoCorrect={false}/>
            <TextInput style={styles.textinputStyle} placeholder="Confirm Password" onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword} autoCapitalize="none" autoCorrect={false}/>
            <TouchableOpacity style={styles.buttonStyle} title="Sign Up" onPress={() => _signup(email, password, confirmPassword)}>
                <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textinputStyle: {
        height: 40,
        borderWidth: 1,
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
        backgroundColor: '#BA4C27',
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: 'black',
        height: 40,
        marginHorizontal: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Signup;