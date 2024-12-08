import React from "react";
import { FlatList, StyleSheet, type FlatListProps } from "react-native";
import AwardItem from "./AwardItem";
import type { Award } from "@interfaces/IAward";

function AwardsList(props: Omit<FlatListProps<Award>, "renderItem">) {
  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      horizontal={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={AwardItem}
      initialNumToRender={4}
      windowSize={4}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    padding: 16,
  },
});

export default AwardsList;
