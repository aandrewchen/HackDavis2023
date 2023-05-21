import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen options={{headerShown: false}} name="FriendsScreen" component={FriendsScreen} />
      <Stack.Screen options={{headerShown: false}} name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
