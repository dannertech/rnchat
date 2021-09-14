import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Login = () => {
    return(
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Login;