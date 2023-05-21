import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.IconBehave}
        >
          <Image
            source={require('../assets/circle-user-regular.svg')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ChatScreen')}
          style={styles.IconBehave}
        >
          <Image
            source={require('../assets/comment-regular.svg')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('FriendsScreen')}
          style={styles.IconBehave}
        >
          <Image
            source={require('../assets/users-solid.svg')}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    width: '100%',
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },
  IconBehave: {
    padding: 14,
  },
  icon: {
    width: 26,
    height: 26,
  },
});
