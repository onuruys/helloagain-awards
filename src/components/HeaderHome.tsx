import RootScreen from "@enums/RootScreen";
import type INavigation from "@interfaces/INavigation";
import { useNavigation, useTheme } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "node_modules/@react-navigation/native-stack/lib/typescript/commonjs/src";
import React from "react";
import { Pressable } from "react-native";
import Icon from "./Icon";
function HeaderHome() {
  const { colors } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<INavigation.IRootStack>>();
  return (
    <Pressable
      onPress={() =>
        navigation.reset({ index: 0, routes: [{ name: RootScreen.HomeScreen }] })
      }
    >
      <Icon name="home" size={24} color={colors.primary} />
    </Pressable>
  );
}
export default HeaderHome;
