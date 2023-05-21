// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// const ProfileScreen = () => <Text>Profile</Text>;
// const FriendsScreen = () => <Text>Friends</Text>;
// const ChatScreen = () => <Text>Chat</Text>;

// const Tab = createBottomTabNavigator();

// const NavBar = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{ tabBarLabel: 'Profile' }}
//         />
//         <Tab.Screen
//           name="Friends"
//           component={FriendsScreen}
//           options={{ tabBarLabel: 'Friends' }}
//         />
//         <Tab.Screen
//           name="Chat"
//           component={ChatScreen}
//           options={{ tabBarLabel: 'Chat' }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default NavBar;

import React from 'react';
import { View, Text, StatusBar, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

var iconHeight = 26;
var iconWidth = 26;

export default class NavBar extends React.Component{

    render() {
        return (
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        
    }
});