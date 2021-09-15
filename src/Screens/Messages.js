import React from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity, Image} from 'react-native';

const Messages = (props) => {
    return(
        <View>
            <Text>This is the messages screen</Text>
            <TouchableOpacity>
                <Text>Send Message</Text>
                <Image source={require('../Images/pngwing.com.png')} style={{height: 15, width: 15}}/>
            </TouchableOpacity>
        </View>
    )
};

// Messages.navigationOptions = (props) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity>
//                 <Image source={require('../Images/pngwing.com.png')} style={{height: 15, width: 15}}/>
//             </TouchableOpacity>
//         )
//     }
// };

const styles = StyleSheet.create({});


export default Messages;