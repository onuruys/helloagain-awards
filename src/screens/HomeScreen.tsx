import type INavigation from "@interfaces/INavigation";
import React from "react";
import { View, Text, SafeAreaView, useColorScheme } from "react-native";

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
    <SafeAreaView>
      <View
        style={{ backgroundColor: colors[isDarkMode ? "dark" : "light"].background }}
      >
        <Text style={{ color: colors[isDarkMode ? "dark" : "light"].text }}>
          Home Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;