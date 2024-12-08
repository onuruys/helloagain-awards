import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import type { SvgProps } from "react-native-svg";

const icons: Record<string, React.FC<SvgProps>> = {
  alert: require("@svg/alert.svg").default,
  "alert-circle": require("@svg/alert-circle.svg").default,
  checkmark: require("@svg/checkmark.svg").default,
  close: require("@svg/close.svg").default,
  heart: require("@svg/heart.svg").default,
  "heart-outline": require("@svg/heart-outline.svg").default,
  help: require("@svg/help.svg").default,
  home: require("@svg/home.svg").default,
  information: require("@svg/information.svg").default,
  moon: require("@svg/moon.svg").default,
  sunny: require("@svg/sunny.svg").default,
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "black", style }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found`);
    return null;
  }

  console.log("icon name: ", name);

  return (
    <View style={style}>
      <IconComponent width={size} height={size} fill={color} />
    </View>
  );
};

export default Icon;
