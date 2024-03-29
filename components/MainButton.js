import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  //render different components based on the platform
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
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
