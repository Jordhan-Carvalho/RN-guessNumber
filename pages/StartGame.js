import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

const StartGame = ({ startGameHandler }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  // Change buttons size when rotate depending on dimmension **
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  // End change buttons size when rotate depending on dimmension **

  const inputHandler = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setValue("");
    setConfirmed(false);
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Number invalid", "The provided number is invalid", [
        { text: "Okay", style: "destructive", onPress: resetInput }
      ]);
      return;
    }
    setConfirmed(true);
    setValue("");
    setSelectedNumber(parseInt(value));
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => startGameHandler(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  // USing touchable to hide the keyboard on iOS beacause blurOnSubmit dont work, onPress dismiss the keyboard
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <BodyText style={styles.title}>Start a New Game!</BodyText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={inputHandler}
                value={value}
              />
              <View style={styles.buttonsContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={Colors.secondary}
                    onPress={resetInput}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={Colors.primary}
                    onPress={confirmInput}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "CrazyCock"
  },
  inputContainer: {
    width: "85%",
    alignItems: "center"
  },
  // button: {
  //   // width: "40%"
  //   width: Dimensions.get("window").width / 4
  // },
  input: {
    width: "20%",
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGame;
