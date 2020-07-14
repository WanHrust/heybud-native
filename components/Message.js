import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message(props) {
    return(<View style={styles.message}>
        <Text>{props.text}</Text>
    </View>);
}

const styles = StyleSheet.create({
    message: {
      padding: 10,
      margin: 5,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 0.5,
    },
  });