import { Counter } from "@components/Counter";
import type INavigation from "@interfaces/INavigation";
import React from "react";
import { View, Text, useColorScheme, Button } from "react-native";
function HomeScreen(props: INavigation.IHomeScreenProps) {
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
      style={{
        backgroundColor: colors[isDarkMode ? "dark" : "light"].background,
        flex: 1,
      }}
    >
      <Text style={{ color: colors[isDarkMode ? "dark" : "light"].text }}>
        Home Screen
      </Text>
      <Counter />
      <Button
        onPress={() => props.navigation.navigate("AwardsScreen")}
        title="Awards"
      />
    </View>
  );
}

export default HomeScreen;
