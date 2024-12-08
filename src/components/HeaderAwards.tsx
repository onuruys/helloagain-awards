import Icon from "@react-native-vector-icons/ionicons";
import { useTheme } from "@react-navigation/native";
import { clearCart } from "@reducers/cartSlice";
import type { AppDispatch } from "@store/store";
import en from "@utils/en";
import React from "react";
import { Alert, Pressable } from "react-native";
import { useDispatch } from "react-redux";
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
    <Pressable onPress={alert}>
      <Icon name="exit" size={24} color={colors.primary} />
    </Pressable>
  );
}
export default HeaderAwards;
