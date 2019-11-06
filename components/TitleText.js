import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = props => {
  return (
    <Text {...props} style={{ ...props.style, ...styles.text }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold"
  }
});

export default TitleText;
