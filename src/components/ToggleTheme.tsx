import { useTheme as useCustomTheme } from "@utils/ManageThemeContext";
import React from "react";
import { Pressable } from "react-native";
import Icon from "./Icon";
function ToggleTheme() {
  const { mode, setMode } = useCustomTheme();
  const newMode = mode === "dark" ? "light" : "dark";
  return (
    <Pressable onPress={() => setMode(newMode)}>
      <Icon
        name={mode === "dark" ? "sunny" : "moon"}
        size={24}
        color={mode === "dark" ? "white" : "black"}
      />
    </Pressable>
  );
}
export default ToggleTheme;
