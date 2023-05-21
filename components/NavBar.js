import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons/faCircleUser';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.IconBehave}>
          <FontAwesomeIcon size={32} icon={faHouse} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('FriendsScreen')}
          style={styles.IconBehave}>
          <FontAwesomeIcon size={32} icon={faUsers} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ChatScreen')}
          style={styles.IconBehave}>
          <FontAwesomeIcon size={32} icon={faComment} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.IconBehave}>
          <FontAwesomeIcon size={32} icon={faCircleUser} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    bottom: -100,
    top: 733,
    width: '100%',
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
    marginBottom: 25,
  },
  IconBehave: {
    padding: 20,
  },
  icon: {
    width: 26,
    height: 26,
  },
});
