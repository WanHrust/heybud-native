import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Input(props) {
  const [enteredMessage, setEnteredMessage] = useState("");

  const onSubmit = () => {
    console.log("Sending message to the cloud... ");
    props.onSubmit(enteredMessage);
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Hey Bud!"
          style={styles.input}
          onChangeText={setEnteredMessage}
          value={enteredMessage}
        ></TextInput>
      </View>
      <View>
        <Button style={styles.button} title="Send" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    flex: 0.8,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flex: 0.2,
  },
});
