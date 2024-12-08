import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../enums/Screen";
import type INavigation from "../interfaces/INavigation";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
function BottomTabs() {
  const { colors } = useTheme();
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<INavigation.IRootStack, Screen.HomeScreen>
    >();
  const handlePress = (index: number) => {
    items[index].onPress();
  };
  const items = [
    {
      title: "Bounties",
      onPress: () => navigate(Screen.AwardsScreen),
    },
    {
      title: "Awards",
      onPress: () => navigate(Screen.CollectedAwardsScreen),
    },
  ];
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      {items.map((label, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={styles.tab}
        >
          <Text>{label.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  tab: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
  },
});
export default BottomTabs;
