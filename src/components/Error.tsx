import React from "react";
import { StyleSheet, Text, View } from "react-native";
function Error({ message }: { message?: string }) {
  return (
    <View style={styles.container}>
      <Text>{message || "Error"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Error;
