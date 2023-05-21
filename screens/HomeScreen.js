import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import {colors} from '../themes';
import NavBar from '../components/NavBar';
import Card from '../components/Cards';

const HomeScreen = () => {
  const users = [
    {id: 1, name: 'Andrew', age: '19', image: '../assets/images/pic6.png'},
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
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#C3DAFE',
          borderRadius: 16,
          marginHorizontal: 34,
          marginBottom: 16,
          marginTop: 15,
          height: 500,
        }}
      >
        <Image
          source={require('../assets/images/pic6.png')}
          style={{ width: 300, height: 300 }}
        />
      </View> */}
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

{
  /* <NavBar /> */
}
{
  /* <View style={{ height: 430 }}>
          <FlatList
            data={items}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ marginHorizontal: 1 }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 16, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
                  <View>
                    <Image source={require('../assets/images/pic6.png')} style={{ width: 144, height: 144, marginBottom: 4 }} />
                    <Text style={{ color: colors.heading, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: colors.heading, fontSize: 12 }}>{item.age}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View> */
}

{
  /* <TouchableOpacity style={{ padding: 8, paddingHorizontal: 12, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 999 }}>
          <Text style={{ color: colors.heading }}>Hi</Text>
        </TouchableOpacity> */
}
