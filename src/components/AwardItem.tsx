import type { Award } from "@interfaces/IAward";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
function AwardItem(props: { item: Award; index: number }) {
  return (
    <View style={styles.container}>
      <Text>{props.item.redeem_description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgrey",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});
export default AwardItem;
