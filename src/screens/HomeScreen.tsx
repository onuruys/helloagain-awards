import type INavigation from "@interfaces/INavigation";
import React from "react";
import { View, useColorScheme, StyleSheet, Button, Image } from "react-native";

const logo = require("@images/hello_again_text_logo.png");
function HomeScreen({ navigation }: INavigation.IHomeScreenProps) {
  const isDarkMode = useColorScheme() === "dark";
  const colors = {
    light: {
      text: "black",
      background: "white",
    },
    dark: {
      text: "white",
      background: "black",
    },
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors[isDarkMode ? "dark" : "light"].background },
      ]}
    >
      <Image source={logo} style={styles.image} />
      <Button onPress={() => navigation.navigate("BottomTabs")} title="Awards" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    resizeMode: "contain",
    height: 96,
  },
});

export default HomeScreen;
