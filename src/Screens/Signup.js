import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
    return(
        <View>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password"/>
            <TextInput placeholder="Confirm Password" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default Signup;