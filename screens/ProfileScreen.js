import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import NavBar from '../components/NavBar';

const ProfileScreen = () => {
  const reviews = [
    {
      id: 1,
      from: 'Samantha',
      text: 'Such a lovely person!',
      flag: 'lightgreen',
    },
    {
      id: 2,
      from: 'Emily',
      text: 'Great person to hang out with!',
      flag: 'lightgreen',
    },
    {
      id: 3,
      from: 'Sarah',
      text: 'I have never had a better first date!',
      flag: 'lightgreen',
    },
    {
      id: 4,
      from: 'Jessica',
      text: 'It was great talking to Andrew :)',
      flag: 'lightgreen',
    },
  ];

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/pic6.png')} />
      </View>
      <Text style={styles.name}>Andrew Chen</Text>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews</Text>
        {reviews.map(review => (
          <View
            key={review.id}
            style={[styles.reviewItem, {backgroundColor: review.flag}]}>
            <Text style={styles.reviewFrom}>{review.from}</Text>
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        ))}
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
    marginTop: 32,
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
    overflow: 'hidden',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  reviewsContainer: {
    width: '80%',
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  reviewItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  reviewFrom: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
