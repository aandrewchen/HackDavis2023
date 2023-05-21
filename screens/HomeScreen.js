import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import NavBar from '../components/NavBar';
import Card from '../components/Cards';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const users = [
    {
      id: 1,
      name: 'Andrew',
      age: '19',
      hobbies: 'Basketball, Having A Good Time, Eating',
      image: '../assets/images/pic6.png',
    },
    {
      id: 2,
      name: 'Stanley',
      age: '19',
      hobbies: 'Coding, Playing League of Legends, Sleeping',
      image: '../assets/images/pic6.png',
    },
    {
      id: 3,
      name: 'Joe',
      age: '20',
      hobbies: 'Playing Guitar, Hanging with Mom, Surfing',
      image: '../assets/images/pic6.png',
    },
    {
      id: 4,
      name: 'Adam',
      age: '18',
      hobbies: 'Piano, Valorant, Chess',
      image: '../assets/images/pic6.png',
    },
    {
      id: 5,
      name: 'Ken',
      age: '21',
      hobbies: 'Partying, Running, Going to the Gym',
      image: '../assets/images/pic6.png',
    },
  ];

  const handleSwipeLeft = () => {
    animateCardFade(() => {
      const nextIndex = (currentIndex + 1) % users.length;
      setCurrentIndex(nextIndex);
      resetCardFade();
    });
  };

  const handleSwipeRight = () => {
    animateCardFade(() => {
      const nextIndex = (currentIndex + 1) % users.length;
      setCurrentIndex(nextIndex);
      resetCardFade();
    });
  };

  const animateCardFade = callback => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      callback();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const resetCardFade = () => {
    fadeAnim.setValue(1);
  };

  return (
    <ScreenWrapper style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}>
        <Text
          style={[
            {
              color: '#000',
              fontWeight: 'bold',
              fontSize: 32,
              marginTop: 13,
            },
          ]}>
          Dating App
        </Text>
      </View>
      <View>
        {users.map((user, index) => (
          <Card key={user.id} user={user} isVisible={index === currentIndex} />
        ))}
      </View>
      <View style={{paddingHorizontal: 16, marginBottom: 16}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={handleSwipeLeft}
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              backgroundColor: '#fff',
              borderWidth: 2,
              borderColor: '#C4C4C4',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <FontAwesomeIcon size={25} icon={faXmark} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSwipeRight}
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              backgroundColor: '#FFF',
              borderWidth: 2,
              borderColor: '#C4C4C4',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <FontAwesomeIcon size={25} icon={faCheck} />
          </TouchableOpacity>
        </View>
      </View>
      <NavBar />
    </ScreenWrapper>
  );
};

export default HomeScreen;
