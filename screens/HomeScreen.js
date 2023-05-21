import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import NavBar from '../components/NavBar';
import Card from '../components/Cards';

const HomeScreen = () => {
  const users = [
    {id: 1, name: 'Andrew', age: '19', hobbies: 'Basketball, Having A Good Time, Eating', image: '../assets/images/pic6.png'},
  ];

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
        {users.map(user => (
          <Card key={user.id} user={user} />
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
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: '#C4C4C4',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Text style={{color: '#000'}}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: '#C4C4C4',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <Text style={{color: '#000'}}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar />
    </ScreenWrapper>
  );
};

export default HomeScreen;