import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';
export default function App() {
  
  return (
    <View style={styles.container}>
      <Text> fdas fads Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Chat></Chat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
});
