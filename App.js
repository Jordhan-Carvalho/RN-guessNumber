import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./pages/StartGame";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
