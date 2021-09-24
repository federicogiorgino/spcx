import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="pulse">Zoom me up, Scotty</Animatable.Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
