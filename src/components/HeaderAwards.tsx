import { useTheme } from "@react-navigation/native";
import { clearCart } from "@reducers/cartSlice";
import type { AppDispatch } from "@store/store";
import en from "@utils/en";
import React from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "./Icon";
import { spacing } from "@utils/Constants";
function HeaderAwards() {
  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();
  const alert = () => {
    Alert.alert(en.warning, en.clear_awards, [
      {
        text: en.cancel,
        style: "cancel",
      },
      { text: "OK", onPress: () => dispatch(clearCart()), style: "destructive" },
    ]);
  };
  return (
    <Pressable onPress={alert} style={styles.container}>
      <Icon name="trash" size={24} color={colors.primary} />
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
export default HeaderAwards;
