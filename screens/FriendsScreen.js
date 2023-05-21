import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar';

const FriendsScreen = () => {
  const [friends, setFriends] = useState([
    {id: 1, name: 'Donald Kim'},
    {id: 2, name: 'Jane Eli'},
    {id: 3, name: 'Davis Althersbury'},
    {id: 4, name: 'Lucas Johnson'},
  ]);

  const renderFriendItem = ({item, index}) => (
    <View style={styles.friendItem}>
      <Text style={styles.friendName}>{item.name}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon size={20} icon={faPlus} />
        </TouchableOpacity>
        {index !== 0 && (
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon size={20} icon={faThumbsUp} />
          </TouchableOpacity>
        )}
        {index !== 1 && (
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon size={20} icon={faThumbsDown} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesomeIcon size={20} icon={faPlus} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={friends}
        keyExtractor={item => item.id.toString()}
        renderItem={renderFriendItem}
        contentContainerStyle={styles.friendList}
      />
      <NavBar />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendList: {
    padding: 20,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 27,
    padding: 23,
    borderRadius: 8,
    backgroundColor: 'lightgray',
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 8,
  },
});

export default FriendsScreen;
