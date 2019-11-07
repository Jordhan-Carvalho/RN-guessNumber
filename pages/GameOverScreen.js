import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ rounds, userChoice, reset }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}>{userChoice}</Text>
          </BodyText>
        </View>

        <MainButton onPress={reset}>NEW GAME!</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    // width: Dimensions.get('window').width * 0.7,
    width: "50%",
    height: "30%",
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    // marginVertical: 20
    // 20 is 5% of device height and 40 2.5%
    marginVertical: Dimensions.get("window").height / 40
  },
  resultText: {
    textAlign: "center",
    // fontSize: 20
    fontSize: Dimensions.get("window").height < 400 ? 12 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 40
  }
});

export default GameOverScreen;
