import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/pic6.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.description}>{user.age}</Text>
        <Text style={styles.description}>{user.hobbies}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 16,
    marginHorizontal: 34,
    marginBottom: 16,
    marginTop: 15,
    height: 500,
  },
  imageContainer: {
    height: '80%',
    width: '50%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#888888',
  },
});

export default Card;