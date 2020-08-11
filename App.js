import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Chat from "./components/Chat";
export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text> Hey bud! </Text>
      </View>
      <Chat></Chat>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    padding: 10,
    alignItems: "center"
  },
});
