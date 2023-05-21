import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import NavBar from '../components/NavBar';

const ChatScreen = () => {
  const [chats, setChats] = useState([
    { id: 1, user: 'Joanna Pearson', lastMessage: 'Heyyy, you like to go hiking?', unreadCount: 2 },
    { id: 2, user: 'Lillian Jones', lastMessage: 'Hi Andrew! How are you?', unreadCount: 1 },
    { id: 3, user: 'Jessica Smith', lastMessage: 'Good night :)', unreadCount: 0 },
  ]);

  const [matches, setMatches] = useState([
    { id: 1, user: 'Ariel Simmons', lastMessage: 'Hobbies: Water skiing, Going to the Gym, Night Drives'},
    { id: 2, user: 'Patricia Jensen', lastMessage: 'Hobbies: Reading, Writing, and Everything in Between'},
  ]);

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Text style={styles.userName}>{item.user}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      {item.unreadCount > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unreadCount}</Text></View>}
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatList}
      />
      <Text style={styles.title2}>You Matched With...</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatList}
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 32,
    marginLeft: 20,
  },
  title2: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 0,
    marginLeft: 20,
  },
  chatList: {
    padding: 20,
    marginBottom: 8
  },
  chatItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'lightgray',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lastMessage: {
    fontSize: 14,
  },
  unreadBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
