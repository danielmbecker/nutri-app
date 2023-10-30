//rsf

import React from "react";
// import { ImageBackground, StyleSheet } from "react-native/types";
import { ImageBackground, StyleSheet, View, Text} from "react-native";

function WelcomeScreen(props) {
  return (
    <View>
        <Text>allo</Text>
    </View>
    // <ImageBackground
    //   styles={styles.background}
    //   source={require("../assets/nutri_background.jpg")}
    // ></ImageBackground>
  );
}

//rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
