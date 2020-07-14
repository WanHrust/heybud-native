import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Input(props) {
  const [enteredMessage, setEnteredMessage] = useState("");

  const onSubmit = () => {
    console.log("Sending message to the cloud... ");
    props.onSubmit(enteredMessage);
  };
  return (
    <View>
      <View>
        <TextInput
          placeholder="Hey Bud!"
          style={styles.input}
          onChangeText={setEnteredMessage}
          value={enteredMessage}
        ></TextInput>
      </View>
      <View>
        <Button title="Send" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
