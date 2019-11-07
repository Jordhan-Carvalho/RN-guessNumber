import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   width: "100%",
  //   height: 90,
  //   paddingTop: 36,
  //   backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
  //   borderBottomWidth: Platform.OS === "ios" ? 1 : 0
  // },
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize: 18,
    fontFamily: "open-sans-bold"
  }
});

export default Header;
