import type INavigation from "@interfaces/INavigation";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

const logo = require("@images/hello_again_text_logo.png");
function HomeScreen({ navigation }: INavigation.IHomeScreenProps) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={logo} style={styles.image} />
      <Button
        onPress={() => navigation.navigate("BottomTabs")}
        title="Check out bounties"
      />
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
