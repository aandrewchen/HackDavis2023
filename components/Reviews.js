import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import NavBar from '../components/NavBar';
import Reviews from '../components/Reviews';

const ProfileScreen = () => {
  const reviews = [
    {
      id: 1,
      from: 'John',
      text: 'This user is a red flag',
      flag: 'red',
    },
    {
      id: 2,
      from: 'Emily',
      text: 'Great person to hang out with!',
      flag: 'green',
    },
    {
      id: 3,
      from: 'Sarah',
      text: 'A bit of a pink flag, but overall nice.',
      flag: 'pink',
    },
  ];

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/pic6.png')} />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <Reviews reviews={reviews} />
      <NavBar />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 80,
    alignSelf: 'center',
  },
  profileContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default ProfileScreen;
