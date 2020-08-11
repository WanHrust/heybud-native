import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message(props) {
    return(<View style={{...styles.message, ...props.style}}>
        <Text>{props.text}</Text>
    </View>);
}

const styles = StyleSheet.create({
    message: {
      padding: 5,
      backgroundColor: "#aaa",
      borderColor: "black",
      borderWidth: 0.5,
    },
  });