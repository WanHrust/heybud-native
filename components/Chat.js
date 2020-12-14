import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
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
    {
      id: "8",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "9",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "10",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "11",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "12",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "13",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "14",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "15",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "16",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "17",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "18",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "19",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "20",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "21",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "22",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "23",
      text: "Hello developer",
      createdAt: new Date(),
    },
    {
      id: "24",
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
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();} }>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={messages}
            contentContainerStyle={styles.list}
            renderItem={(itemData) => (
              <Message
                style={styles.message}
                text={itemData.item.text}
              ></Message>
            )}
          ></FlatList>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} onSubmit={onSubmitClicked}></Input>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "90%"
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  message: {
    margin: 5,
  },
  inputContainer: {
    flex: 0.1,
    width: "100%",
    alignItems: "center"
  },
  input: {
    width: "90%"
  },
});
