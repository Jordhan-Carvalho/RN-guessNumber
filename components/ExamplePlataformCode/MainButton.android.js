import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontFamily: "national-cartoon",
    fontSize: 18
  },
  container: {
    borderRadius: 20,
    overflow: "hidden"
  }
});

export default MainButton;
