import Icon from "@react-native-vector-icons/ionicons";
import { useTheme as useCustomTheme } from "@utils/ManageThemeContext";
import React from "react";
import { Pressable } from "react-native";
function ToggleTheme() {
  const { mode, setMode } = useCustomTheme();
  return (
    <Pressable
      onPress={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      <Icon
        name={mode === "dark" ? "sunny" : "moon"}
        size={24}
        color={mode === "dark" ? "white" : "black"}
      />
    </Pressable>
  );
}
export default ToggleTheme;
