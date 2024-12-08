import React from "react";
import { View, Text, StyleSheet } from "react-native";
function NoData({ message }: { message?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || "No data"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "gray",
  },
});
export default NoData;
