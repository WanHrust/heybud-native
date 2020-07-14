import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Message from "./Message";
import Input from "./Input";

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

  const onSubmitClicked = (message) => {
    console.log("Message: " + message);
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Math.random().toString(),
        text: message,
        createdAt: new Date(),
      },
    ]);
    console.log(messages);
  };

  return (
    <View>
      <View style={styles.messages}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={messages}
          renderItem={(itemData) => (
            <Message text={itemData.item.text}></Message>
          )}
        ></FlatList>
      </View>

      <View style={styles.input}>
        <Input onSubmit={onSubmitClicked}></Input>
      </View>
    </View>
  );
  a;
};

export default Chat;

const styles = StyleSheet.create({
  messages: {
    paddingLeft: 10,
    paddingBottom: 50,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
  input: {},
});
