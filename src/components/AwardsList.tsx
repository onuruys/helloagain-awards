import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  type FlatListProps,
} from "react-native";
import type { Award } from "@interfaces/IAward";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@store/store";
import { type RootState } from "@store/store";
import { openSuccess } from "@reducers/modalSlice";
import AwardCard from "./AwardItem";
function AwardsList(props: Omit<FlatListProps<Award>, "renderItem">) {
  const {
    data: bounties,
    loading,
    error,
    errorMessage,
  } = useSelector((state: RootState) => state.bounties);

  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (award: Award) => {
    if (award.is_active && award.availability > 0) {
      dispatch(openSuccess());
    }
  };

  const renderAward = ({ item }: { item: Award }) => (
    <AwardCard onSelect={handleSelect} item={item} />
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {errorMessage}</Text>;

  return (
    <SafeAreaView>
      <FlatList
        {...props}
        keyboardShouldPersistTaps="handled"
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAward}
        initialNumToRender={4}
        windowSize={4}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        data={bounties}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    padding: 16,
  },
});

export default AwardsList;
