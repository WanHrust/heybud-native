import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Input(props) {
  const [enteredMessage, setEnteredMessage] = useState("");

  const onSubmit = () => {
    console.log("Sending message to the cloud... ");
    props.onSubmit(enteredMessage);
  };
  return (
    <View style={{...styles.container, ...props.style}}>
      <View  style={styles.inputContainer}>
        <TextInput
          placeholder="Hey Bud!"
          onChangeText={setEnteredMessage}
          value={enteredMessage}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer} >
        <Button title="Send" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputContainer: {
    flex: 0.8,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    marginBottom: 10,
    backgroundColor: "#f00"
  },
  buttonContainer: {
    flex: 0.2,
    backgroundColor: "#00f"
  },
});
