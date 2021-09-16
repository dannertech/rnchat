import React, {useCallback, useEffect,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ref = database()

const Chat = (props) => {
    const userEmail = auth().currentUser?.email;
    const messagesObject = props.route.params.messagesData
    const [messages, setMessages] = useState([]);

    const testMessage = {
        _id: 1,
        text: "Hello Developer",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: "React Native",
        }
    };
    const messagesObjToArray = (object) => {
        const array = [];
        for(key in object){
            array.push(object[key]);
        }
        array.push(testMessage);
        setMessages([...array]); 
    };

    const onSend = useCallback((messages = []) => {
        const objectId = Math.floor(Math.random() * 100);
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const {_id, createdAt, text, user} = messages[0];
        ref.ref('/messages/' + `${objectId}`).set({_id, createdAt, text, user})
        .then(() => {
            console.log("data set");
        })
    }, []);

    useEffect(() => {
        messagesObjToArray(messagesObject);
        
    }, []);

    

    return(
        <GiftedChat 
        messages={messages}
        user={{_id: auth().currentUser?.email}}
        onSend={messages => onSend(messages)}
        />
        
    )
};

export default Chat;