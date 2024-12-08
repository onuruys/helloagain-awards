import RootScreen from "@enums/RootScreen";
import type INavigation from "@interfaces/INavigation";
import { useNavigation, useTheme } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "node_modules/@react-navigation/native-stack/lib/typescript/commonjs/src";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "./Icon";
import { spacing } from "@utils/Constants";
function HeaderHome() {
  const { colors } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<INavigation.IRootStack>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.reset({ index: 0, routes: [{ name: RootScreen.HomeScreen }] })
      }
    >
      <Icon name="home" size={24} color={colors.primary} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: spacing.md,
  },
});
export default HeaderHome;
