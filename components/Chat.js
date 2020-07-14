import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "2",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "3",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "4",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "5",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "6",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "7",
      text: "Hello developer",
      createdAt: new Date(),
    },
  ]);

  return (
    <View style={styles.chat}>
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={messages}
        renderItem={(itemData) => (
            <Message text={itemData.item.text}></Message>
        )}>
        </FlatList>
    </View>
  );a
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
});
