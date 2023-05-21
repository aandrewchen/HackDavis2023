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
        <Image
          source={require('../assets/images/pic6.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews</Text>
        <Reviews reviews={reviews} />
      </View>
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
    marginTop: 30,
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  reviewsContainer: {
    width: '80%',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
});

export default ProfileScreen;
