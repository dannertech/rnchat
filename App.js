/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity, Button} from 'react-native';

import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Messages from './src/Screens/Messages';
import Chat from './src/Components/Chat';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Messages" component={Messages} options={{headerLeft: () => (
          <Button title="Sign Out" />
  )}}/>
        <Stack.Screen name="Chat" component={Chat} options={{headerRight: () => (
          <Button title="Sign Out" />
  )}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
